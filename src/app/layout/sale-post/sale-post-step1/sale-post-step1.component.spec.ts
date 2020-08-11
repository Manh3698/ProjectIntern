import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePostStep1Component } from './sale-post-step1.component';

describe('SalePostStep1Component', () => {
  let component: SalePostStep1Component;
  let fixture: ComponentFixture<SalePostStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePostStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePostStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
