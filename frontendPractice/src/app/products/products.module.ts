import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

const routes = [
  {
      path : '**',
      component:ProductsComponent,
      resolve:{ 
        featuredList: ProductsService
      }
  }
];

@NgModule({
  declarations: [
    ProductsComponent
  ],
  providers: [
    ProductsService
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductsModule { }
