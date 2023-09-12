import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsActions } from '../state/cart.actions';  
import { ProductGroup, selectGroupedCartEntries } from '../state/cart.selectors'; 

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartEntries$: Observable<ProductGroup[]>

  constructor(private store: Store) {
    this.cartEntries$ = store.select(selectGroupedCartEntries);
  }

  ngOnInit(): void {
  }

  clearEntries () {
    this.store.dispatch(ProductsActions.clear(0));
  }

  more(entry: ProductGroup) {
    this.store.dispatch(ProductsActions.add(entry.product));
  }

  less (entry: ProductGroup) {
    this.store.dispatch(ProductsActions.remove(entry.product));
  }

}