import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { ElementsModule } from './elements/elements.module';
import { CityModule } from './city/city.module';
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { ProductData } from './db/db';

const routes: Routes = [
  {
    path        : 'elements',
    loadChildren: './elements/elements.module#ElementsModule'
  },
  {
    path        : 'city',
    loadChildren: './city/city.module#CityModule'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(ProductData),
    BrowserModule,
    BrowserAnimationsModule,
    CityModule,
    ElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
