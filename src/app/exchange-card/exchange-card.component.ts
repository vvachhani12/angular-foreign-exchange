import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { CurrencyExchangeComponent } from '../currency-Exchange/currency-exchange.component';
import { CurrencyTransactionComponent } from '../currency-Exchange/currency-transaction/currency-transaction.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pm-exchange-card',
  templateUrl: './exchange-card.component.html',
  styleUrls: ['./exchange-card.component.css']
})
export class ExchangeCardComponent implements OnInit {

  /**** Creating an instance of ComponentFactoryResolver when ****/
  constructor(private resolver: ComponentFactoryResolver) { }

  /**** ViewChild decorator to create dynamic components ****/
  @ViewChild('appenHere', {static : false, read : ViewContainerRef}) target: ViewContainerRef;
  @ViewChild('currencyTrans', {static : false, read : ViewContainerRef}) container: ViewContainerRef;
  @ViewChild('currencyGrid', {static : false, read : ViewContainerRef}) gridContainer: ViewContainerRef;

  public counter: number = 0;
  public renderedCounters: number[] = [];
  public currency: string;
  component = [];
  direction: string;
  dealRates: string;
  currencyPair: string;
  currencyAmount: string;
  faPlus = faPlus;

  ngOnInit() {
  }

  /**** Function to generate new card to do the exchange when Add button is clicked ****/
  addNewComponent() {

    /**** To keep count of count of numbers of card created or destroyed ****/
    if(this.renderedCounters.length >= -1){
      this.counter++;
      let count = this.counter + 1;
      for(let i=1; i<=count; i++){
        this.counter = i;
          if(this.renderedCounters.indexOf(this.counter)===-1){
            this.renderedCounters.push(this.counter);
            break;
          }
      }

      /**** Generates an instance of the component ****/
      var comp = this.resolver.resolveComponentFactory(CurrencyExchangeComponent);
      
      /**** Generates a dynamic component ****/
      let expComponent = this.target.createComponent(comp);

      /**** Passing variables and methods to the instance of the component created ****/
      expComponent.instance._ref = expComponent;
      expComponent.instance.parentcount = this.counter;
      expComponent.instance.notifyParent.subscribe(val => {
        this.renderedCounters.splice(this.renderedCounters.indexOf(val), 1); //removes the index of the deleted component
      });
      expComponent.instance.changeCurrency.subscribe(curr => {
        this.currency = curr; // sets currenyPair when it's changed
      });
      expComponent.instance.transaction.subscribe(trans => {
        this.receiveTrans(trans) // calls functions to generate a transaction record component
      });
      expComponent.instance.currencyGrid.subscribe(grid => {
        this.createCurrencyGrid(grid); // calls functions to create new row of transaction on the grid table
      })
    }
  }

  /**** Function to generate a trasaction component ****/
  receiveTrans(trans: any){

    /**** Transaction Component is generated ****/
    let transComp = this.resolver.resolveComponentFactory(CurrencyTransactionComponent);
    let transComponent = this.container.createComponent(transComp);

    /**** Input variable and methods are passede to the transaction Component via instance ****/
    transComponent.instance.currncyStr = trans.currency;
    transComponent.instance.amount = trans.amount;
    if (trans.type == 'Buy') {
      transComponent.instance.price = trans.bidRates;
      transComponent.instance.transType = trans.type;
    } else if (trans.type == 'Sell') {
      transComponent.instance.price = trans.askRates;
      transComponent.instance.transType = trans.type;
    }
  }

  /**** Function to update the row data for the grid table ****/
  createCurrencyGrid(grid: any) {
    this.direction = grid.type;    
    this.currencyPair = grid.currency;
    this.currencyAmount = grid.amount;
    if (grid.type == "Buy") {
      this.dealRates = grid.bidRates;
    } else if(grid.type == "Sell") {
      this.dealRates = grid.askRates;
    }
  }
}
