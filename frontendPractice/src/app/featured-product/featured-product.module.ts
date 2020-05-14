import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedProductComponent} from './featured-product.component';
import { FeaturedProductService } from './featured-product.service';
import { FeaturedDetailComponent } from './featured-detail/featured-detail.component'
import { RouterModule } from '@angular/router';
import { FeaturedResolve } from './featured-product.service';


const routes = [
  {
      path : 'list',
      component:FeaturedProductComponent,
      resolve:{ 
        featuredList: FeaturedProductService
      }
    },
    {
      path : 'featured/list/:id',
      component:FeaturedDetailComponent,
      resolve:{
        resolvedFeature:FeaturedResolve
      }
    }
]

@NgModule({
  declarations: [
    FeaturedProductComponent,
    FeaturedDetailComponent,
  ],
  providers:[
    FeaturedProductService,
    FeaturedResolve
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FeaturedProductModule { }
