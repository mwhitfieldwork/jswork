import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module'

import { ElementsComponent } from './elements.component';
import { ElementsService } from './elements.service';
;
const routes = [
  {
      path : '**',
      component:ElementsComponent,
      //resolve:{ featuredList: ProductsService}
  }
];

@NgModule({
  declarations: [
    ElementsComponent
  ],
  providers:[
    ElementsService
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    ElementsComponent
  ]
})
export class ElementsModule { }
