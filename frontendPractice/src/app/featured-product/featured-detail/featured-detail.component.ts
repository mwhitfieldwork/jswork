import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {FeaturedProductService} from '../featured-product.service';

@Component({
  selector: 'app-featured-detail',
  templateUrl: './featured-detail.component.html',
  styleUrls: ['./featured-detail.component.css']
})
export class FeaturedDetailComponent implements OnInit {
  
  product:any;
  featured:any;

  constructor(private route:ActivatedRoute,
    private _featuredService: FeaturedProductService) { }

  ngOnInit() {
    this._featuredService.onFeaturedsChanged
    .subscribe(featureds => {
        this.featured = featureds;
        console.log(this.featured)
    });
    //this.product = this.route.snapshot.data['resolvedFeature'];

  }

}
