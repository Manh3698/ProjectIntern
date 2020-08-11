import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePostStep3Component } from './sale-post-step3.component';

describe('SalePostStep3Component', () => {
  let component: SalePostStep3Component;
  let fixture: ComponentFixture<SalePostStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePostStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePostStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
