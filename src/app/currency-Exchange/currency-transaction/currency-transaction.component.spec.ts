import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyTransactionComponent } from './currency-transaction.component';

describe('CurrencyTransactionComponent', () => {
  let component: CurrencyTransactionComponent;
  let fixture: ComponentFixture<CurrencyTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
