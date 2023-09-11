import { Component } from '@angular/core';
import { Product, ProductControllerService } from '../api';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { selectGroupedCartEntries } from '../state/cart.selectors';
export interface Example {httpHeaderAccept?: string | undefined, context?: HttpContext }

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  
  products: Product[] = [];
  products$?: Observable<Product[]>;

  constructor(private productControllerService: ProductControllerService, private http: HttpClient, private store: Store){}

  ngOnInit(){
    this.all();
  }
  all(){
    this.products$ = this.productControllerService.getAllProducts();
  }
}
