import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePostStep2Component } from './sale-post-step2.component';

describe('SalePostStep2Component', () => {
  let component: SalePostStep2Component;
  let fixture: ComponentFixture<SalePostStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePostStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePostStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
