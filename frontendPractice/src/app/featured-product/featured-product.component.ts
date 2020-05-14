import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FeaturedProductService} from './featured-product.service';


@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit {
  
  features:any;
  featureds:any[]= [];

  constructor(
    private route:ActivatedRoute,
    private _featuredService: FeaturedProductService
    ) { }

  ngOnInit():void {
    //this.features = this.route.snapshot.data['featuredList'];
    this._featuredService.onFeaturedsChanged
    .subscribe(featureds => {
        this.featureds = featureds;
    });
  }

}
