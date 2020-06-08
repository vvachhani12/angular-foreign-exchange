import { 
  Component,
  OnInit,
  Output,
  Input,
  ViewEncapsulation,
  EventEmitter
} from '@angular/core';
import { EnlargeDecimal } from './convert-to-enlargeDecimal.component';

@Component({
  selector: 'pm-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css'],
  providers: [EnlargeDecimal],
  encapsulation: ViewEncapsulation.None // setting encapsulation to none to pass HTML and HTML styles to the parent component
})

export class CurrencyExchangeComponent implements OnInit {
  
  /**** Creating an instance of the custom pipe to enlarge the decimal value ****/
  constructor(
    private enlargeDecimal: EnlargeDecimal
  ) { }

  /**** Output and Input decorator to pass to receive variables or methods ****/
  @Input() parentcount: number;
  @Output() transaction: EventEmitter<any> = new EventEmitter<any>();
  @Output() currencyGrid: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeCurrency: EventEmitter<any> = new EventEmitter<any>();
  @Output() notifyParent: EventEmitter<number> = new EventEmitter<number>();
  @Output() amountExchange: EventEmitter<string> = new EventEmitter<string>();
  _ref: any;
  interval: any;
  bidPrice: string;
  askPrice: string;
  currencyObj = {
    type: '',
    currency: '',
    bidRates: '',
    askRates: '',
    amount: ''
  }
  public exchangeAmt = [
    {
      id: 1,
      value: '200,000,000'
    },
    {
      id: 2,
      value: '100,000'
    }
  ];

  /**** Function that triggers when the component is first initialized ****/
  ngOnInit() {
    this.generateNumber(); // calling random number generator
    this.newRates(); // calling the set Interval to generate new numbers every 5 seconds
    this.currencyAmount(this.exchangeAmt[0].value);
  }

  /**** Function triggers when delete button is clicked to delete a card ****/
  removeObject() {
    this.notifyParent.emit(this.parentcount); // Calls the parent to delete the dynamically created component via Output decorator
    if (this.interval) {
      clearInterval(this.interval); // Clears the interval to generate new number for the dynamic component created
    }
    this._ref.destroy(); // calls the component's destroy method created by componentRef when the component was created.
  }

  /**** Function that triggers when the amount is changed ****/
  currencyAmount(amount: string): void {
    this.currencyObj.amount = amount;
  }

  /**** Function to generate random number between 1-100 ****/
  generateNumber() {
    const tempBidPrice = (Math.random()*100).toFixed(5);
    const tempAskPrice = (Math.random()*(parseInt(tempBidPrice))).toFixed(5);

    /**** Passing the number to instance of enlarge decimal pipe created to enlarge the 3rd and 4th decimal ****/
    this.bidPrice = this.enlargeDecimal.transform(tempBidPrice);
    this.askPrice = this.enlargeDecimal.transform(tempAskPrice);

    /**** setting the price amount to the currencyObj which gets passed to the parent component ****/
    this.currencyObj.bidRates = tempBidPrice;
    this.currencyObj.askRates = tempAskPrice;
  }

  /**** Function to call generateNumber function every 5 seconds ****/
  newRates() {
    this.interval = setInterval(() => {
      this.generateNumber();
    }, 5000);
  }

  /**** Function that triggers when the currenyPair is changed ****/
  onChangeCurrency(currency: string): void {
    this.currencyObj.currency = currency;
    this.changeCurrency.emit(currency); // Calls the parent component to give the new data via Output decorator
  }

  /**** Add Transaction function triggered on click of Bid or Ask to record the transaction ****/
  addTrans(type:string) {

    /****** setting the transaction type to Buy to Sell *******/
    this.currencyObj.type = type;

    /*** Calling the transaction event to trigger component creation with the currencyObj ****/
    this.transaction.emit(this.currencyObj);

    /*** Calling the Currency Grid event to trigger component creation with the currencyObj ****/
    this.currencyGrid.emit(this.currencyObj);
  }

}
