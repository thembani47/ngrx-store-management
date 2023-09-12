import { cartReducer, metaReducerLocalStorage } from './state/cart.reducer'; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ApiModule } from './api';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopProductsComponent,
    ShoppingCartComponent,
    SignInComponent,
    SignUpComponent,
    
  ],
  imports: [
    ApiModule,
    BrowserModule,
    StoreModule.forRoot({ cartEntries: cartReducer }, { metaReducers: [ metaReducerLocalStorage ] }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }