import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePostFinalComponent } from './sale-post-final.component';

describe('SalePostFinalComponent', () => {
  let component: SalePostFinalComponent;
  let fixture: ComponentFixture<SalePostFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePostFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePostFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
