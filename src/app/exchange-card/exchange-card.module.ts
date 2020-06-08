import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyExchangeModule } from '../currency-Exchange/currency-exchange.module';
import { CurrencyExchangeComponent } from '../currency-Exchange/currency-exchange.component';import { CurrencyTransactionComponent } from '../currency-Exchange/currency-transaction/currency-transaction.component';
import { CurrencyGridModule } from '../currency-grid/currency-grid.module';
import { CurrencyGridComponent } from '../currency-grid/currency-grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    CurrencyExchangeComponent,
    CurrencyGridComponent
  ],
  imports: [
    CommonModule,
    CurrencyExchangeModule,
    CurrencyGridModule,
    AgGridModule.withComponents([])
  ],
  entryComponents: [
    CurrencyExchangeComponent,
    CurrencyGridComponent
  ],
  exports: [
    CurrencyGridComponent
  ]
})
export class ExchangeCardModule { }
