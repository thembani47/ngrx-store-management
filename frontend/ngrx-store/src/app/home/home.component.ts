import { Component, OnInit } from '@angular/core';
import { Product, ProductControllerService } from '../api';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products$?: Observable<Product[]>;

  constructor(private store: Store, private productControllerService: ProductControllerService) { }

  ngOnInit(): void {
    this.all()
  }

  all(){
    this.products$ = this.productControllerService.getAllProducts();
  }
  
  onClick(id: number){
    this.products$ = this.productControllerService._delete(id);
    window.location.reload()
  }

}
