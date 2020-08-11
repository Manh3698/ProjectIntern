import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListProductComponent } from './list-product/list-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { SalePostStep1Component } from './sale-post/sale-post-step1/sale-post-step1.component';
import { SalePostStep2Component } from './sale-post/sale-post-step2/sale-post-step2.component';
import { SalePostStep3Component } from './sale-post/sale-post-step3/sale-post-step3.component';
import { SalePostFinalComponent } from './sale-post/sale-post-final/sale-post-final.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', component: HomepageComponent},
      { path: 'list-product', component: ListProductComponent},
      { path: 'detail-product', component:DetailProductComponent},
      { path: 'post-step1', component:SalePostStep1Component},
      { path: 'post-step2', component:SalePostStep2Component},
      { path: 'post-step3', component:SalePostStep3Component},
      { path: 'post-final', component:SalePostFinalComponent}
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
