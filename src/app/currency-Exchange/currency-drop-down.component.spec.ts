import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDropDownComponent } from './currency-drop-down.component';

describe('CurrencyDropDownComponent', () => {
  let component: CurrencyDropDownComponent;
  let fixture: ComponentFixture<CurrencyDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
