import { Component } from '@angular/core';
import { Product,Products } from '../../data/products';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    products: Product[]|undefined;
    /**
     *
     */
    constructor() {
     this.products = Products;
      
    }
}
