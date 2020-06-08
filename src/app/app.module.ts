import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExchangeCardComponent } from './exchange-card/exchange-card.component';
import { ExchangeCardModule } from './exchange-card/exchange-card.module';
import { CurrencyGridComponent } from './currency-grid/currency-grid.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    ExchangeCardComponent
  ],
  imports: [
    BrowserModule,
    ExchangeCardModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
