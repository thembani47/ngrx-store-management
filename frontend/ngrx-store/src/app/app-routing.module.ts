import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'products', component: ShopProductsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'test', component: TestComponent},
  { path: '**', component: ShopProductsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
