import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'; 
import{BasicTableModule} from './basictable/basictable.module';
import{BasicTablesModule}from './basictables/basictables.module';

import { FeaturedProductModule } from './featured-product/featured-product.module';
import { ProductsModule } from './products/products.module';

import { RouterModule, Routes } from '@angular/router';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { ChevronComponent } from './chevron/chevron.component';
import { BasicformComponent } from './basicform/basicform.component';
import { ProductComponent } from "./basicform/component";
import { ProductgraphComponent } from './productgraph/productgraph.component';

import {GraphService} from './productgraph/productgraph.service'
import {ProductGraphDirective} from './productgraph/productgraph.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValidateformComponent } from './validateform/validateform.component';
import{ValidateformService} from './validateform/validateform.service';
import { ReponsivesvgComponent } from './reponsivesvg/reponsivesvg.component';
import { WidgetsComponent } from './widgets/widgets.component';
import{ItemsFilterPipe} from './widgets/filter.pipe';
import { InterviewComponent } from './interview/interview.component';


const routes: Routes = [
  {path: 'chevron', component: ChevronComponent,},
  {path:'basicform', component:BasicformComponent},
  {path:'bookform', component:ProductComponent},
  {path:'productgraph', component:ProductgraphComponent},
  {path:'validate', component:ValidateformComponent},
  {path:'widgets', component:WidgetsComponent},
  {path:'interview', component:InterviewComponent},
  {
    path        : 'featured',
    loadChildren: './featured-product/featured-product.module#FeaturedProductModule'
  },
  {
    path        : 'products',
    loadChildren: './products/products.module#ProductsModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ChevronComponent,
    BasicformComponent,
    ProductComponent,
    ProductgraphComponent,
    ProductGraphDirective,
    ValidateformComponent,
    ReponsivesvgComponent,
    ItemsFilterPipe,
    WidgetsComponent,
    InterviewComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BasicTablesModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FeaturedProductModule,
    ProductsModule,
    FormsModule,
    BasicTableModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [
    GraphService,
    ValidateformService
  ],
  exports:[
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
