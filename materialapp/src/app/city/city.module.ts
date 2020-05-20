import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';

import { CityComponent } from './city.component';
import { CityService } from './city.service';
import { MaterialModule } from '../shared/material.module';
//import { MatModule } from '../shared/mat.module';

const routes: Routes = [
  {
      path: 'city',
      component: CityComponent,
  }
];

@NgModule({
  declarations: [
    CityComponent
  ],
  exports:[
    CityComponent
  ],
  providers:[
    CityService
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class CityModule { }
