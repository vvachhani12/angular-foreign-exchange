import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyDropDownComponent } from './currency-drop-down.component';
import { EnlargeDecimal } from './convert-to-enlargeDecimal.component';
import { CurrencyTransactionComponent } from './currency-transaction/currency-transaction.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CurrencyDropDownComponent,
    EnlargeDecimal,
    CurrencyTransactionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CurrencyDropDownComponent,
    EnlargeDecimal
  ],
  entryComponents: [
    CurrencyTransactionComponent
  ]
})
export class CurrencyExchangeModule { }
