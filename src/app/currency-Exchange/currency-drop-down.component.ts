import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-currency-drop-down',
  templateUrl: './currency-drop-down.component.html',
  styleUrls: ['./currency-drop-down.component.css']
})
export class CurrencyDropDownComponent implements OnInit {

  /**** Output decorator to emit any changes to the parent component ****/
  @Output() changeCurrency: EventEmitter<string> = new EventEmitter<string>();

  /**** Array of object that hold the Curreny Pair ****/
  public summaries = [
    {
      id: 1,
      currency: 'EUR/USD'
    },
    {
      id: 2,
      currency: 'EUR/GBP'
    },
    {
      id: 3,
      currency: 'USD/CAD'
    },
    {
      id: 4,
      currency: 'AUD/CAD'
    },
    {
      id: 5,
      currency: 'USD/JPY'
    }
  ];

  constructor() { }

  /**** Function that triggers when curreny pair is changes ****/
  foreignCurrency(filterVal: string): void {
    this.changeCurrency.emit(filterVal); // Emits the new currency pair to the parent component via Output decorator
  }

  /**** On initialization of the component assign the intital currenncy pair value ****/
  ngOnInit() {
    this.foreignCurrency(this.summaries[0].currency);
  }

}
