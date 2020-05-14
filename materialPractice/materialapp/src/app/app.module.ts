import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// import { MaterialModule } from './shared/material.module';
import { RouterModule, Routes } from '@angular/router';
import { ElementsModule } from './elements/elements.module';


const routes: Routes = [
  {
    path        : 'elements',
    loadChildren: './elements/elements.module#ElementsModule'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    // MaterialModule,
    ElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
