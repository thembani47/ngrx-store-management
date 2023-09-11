import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct } from '../state/cart.actions'; 
import { Product } from '../model/product'; 


export const PRODUCTS = [ {
  id: 1,
  name: "Rooster",
  description: "Catch it if you can!",
  price: 299.99,
  image: "assets/img/rooster.jpg",
}, {
  id: 2,
  name: "White Chicken",
  description: "Very Lazy!",
  price: 100.00,
  image: "assets/img/white-chicken.png",
}, {
  id: 3,
  name: "Egg Laying",
  description: "Mother NATURE!",
  price: 349.99,
  image: "assets/img/egg-laying.jpg",
}, {
  id: 4,
  name: "Ram",
  description: "...",
  price: 999.99,
  image: "assets/img/goat/ram.jpg",
}, {
  id: 5,
  name: "Buck",
  description: "...",
  price: 1500.00,
  image: "assets/img/goat/Buck-4.jpg",
}, {
  id: 6,
  name: "Ram",
  description: "...",
  price: 1100.00,
  image: "assets/img/goat/Malabari.jpg",
}]

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {


  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public products(): Product[] {
    return PRODUCTS
  }

  public buyProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  }
}
