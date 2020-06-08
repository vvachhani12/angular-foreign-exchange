import { Component, OnInit, OnChanges, Input, ComponentFactoryResolver } from '@angular/core';
import { CurrencyExchangeComponent } from '../currency-exchange.component';
import { CurrencyExchangeModule } from '../currency-exchange.module';

@Component({
  selector: 'pm-currency-transaction',
  templateUrl: './currency-transaction.component.html',
  styleUrls: ['./currency-transaction.component.css']
})
export class CurrencyTransactionComponent implements OnInit {

  constructor() { }

  _ref: any;
  @Input() currncyStr: string;
  @Input() price: string;
  @Input() transType: string;
  @Input() amount: string;
  currency: string;
  rates: string;
  type: string;
  currAmount: string;


  ngOnInit() {
    this.currency = this.currncyStr; 
    this.rates = this.price;
    this.type = this.transType;
    this.currAmount = this.amount;
  }

  setStyle(): any {
    if (this.type == 'Buy') {
      return {'background-color': "Green"};
    } else if (this.type == 'Sell') {
      return {'background-color': 'Red'};
    }
  }

}
