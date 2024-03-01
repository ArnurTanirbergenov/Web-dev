import { Component } from '@angular/core';

import { products } from '../products';
import{Product} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  link:string;
  constructor(){
    this.link = "";
  }
  share(product: Product ) {
    const url = `https://api.whatsapp.com/send?text=Check out this product ${product.link}`;
    window.open(url, '_blank');
  }
  onNotify(){
    window.alert('You will be notified')
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/