import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsActions } from '../state/cart.actions'; 
import { Product, ProductControllerService } from '../api'; 
import { Observable } from 'rxjs';



@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {

  products$?: Observable<Product[]>;
  constructor(private store: Store, private productControllerService: ProductControllerService) { }

  ngOnInit(): void {
    this.all();
  }

  all(){
    this.products$ = this.productControllerService.getAllProducts();
  }

  onAdd(product: Product) {
    this.store.dispatch(ProductsActions.add(product));
  }
}
