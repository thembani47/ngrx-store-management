import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './gurds/auth.gurd';

const routes: Routes = [
  { path: 'products', component: ShopProductsComponent, canActivate: [AuthGuard]  },
  { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard]  },
  { path: 'signin', component: SignInComponent},
  { path: 'signup', component: SignUpComponent},
  { path: '', component: SignInComponent},
  { path: '**', component: ShopProductsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
