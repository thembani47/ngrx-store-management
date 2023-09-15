import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountProducts, selectTotalPrice } from '../state/cart.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
[x: string]: any;

  countProducts$: Observable<number>;
  totalPrice$: Observable<number>;

  isRequired: boolean = false;
  

  constructor(private store: Store, private router: Router) {
    this.countProducts$ = store.select(selectCountProducts);
    this.totalPrice$ = store.select(selectTotalPrice)
  }

  ngDoCheck(): void {
    let currentUrl = this.router.url;
    
    if (currentUrl == '/signin' || currentUrl == '/signup' ) {
      this.isRequired = false;
    } else {
      this.isRequired = true;
    }
  }

  ngOnInit(): void {
    this.getUserRole();
    console.log('admin: ', this.getUserRole());
  }
  btnClick =  () => {
    this.router.navigateByUrl('/signup');
  };
  logout(){
    localStorage.removeItem("currentUser");
    this.router.navigateByUrl('/signin');
  }

  getUser() {
    let user = localStorage.getItem('currentUser')
    if (user !== null) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }

  getUserRole(){
    let user = this.getUser();
    return user.role;
  }
  
}
