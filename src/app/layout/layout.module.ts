import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SalePostStep1Component } from './sale-post/sale-post-step1/sale-post-step1.component';
import { SalePostStep2Component } from './sale-post/sale-post-step2/sale-post-step2.component';
import { SalePostStep3Component } from './sale-post/sale-post-step3/sale-post-step3.component';
import { SalePostFinalComponent } from './sale-post/sale-post-final/sale-post-final.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent, 
    FooterComponent,
    HomepageComponent, 
    DetailProductComponent,
    ListProductComponent, 
    SalePostStep1Component,
    SalePostStep2Component, 
    SalePostStep3Component, 
    SalePostFinalComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
