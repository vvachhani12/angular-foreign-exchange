import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { GridOptions } from "ag-grid/main";

@Component({
  selector: 'pm-currency-grid',
  templateUrl: './currency-grid.component.html',
  styleUrls: ['./currency-grid.component.css']
})
export class CurrencyGridComponent implements OnChanges {

  /**** Creating an instance of GridOption to add new data rows ****/
  constructor() {
    this.gridOptions = <GridOptions>{};
  }

  /**** Input decorator to receive the data passed by the parent component ****/
  @Input() currencyPair: string;
  @Input() dealRates: string;
  @Input() direction: string;
  @Input() currencyAmount: string;
  gridOptions: GridOptions;

  /**** Function to trigger everytime a change occurs to this component ****/
  ngOnChanges() {

    /**** creating a new row object ****/
    let newRow= {
      currencyPair: this.currencyPair,
      direction: this.direction,
      dealRate: this.dealRates,
      notional: this.currencyAmount 
    }

    /**** Calling function to create a new data row ****/
    this.AddRows(newRow);
  }

  /**** Function to create a new data row ****/
  AddRows(newRow: {}){
    this.gridOptions.api.addItems([newRow]);
    this.gridOptions.api.refreshView();
  }

  /**** Columns for the ag-grid table ****/
  columnDefs = [
      {headerName: 'CurrencyPair', field: 'currencyPair' },
      {headerName: 'Direction', field: 'direction' },
      {headerName: 'DealRate', field: 'dealRate'},
      {headerName: 'Notional', field: 'notional'}

  ];

  /**** Rows for the ag-grid table ****/
  rowData = [];
}