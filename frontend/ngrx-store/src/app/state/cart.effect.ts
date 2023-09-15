import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ProductControllerService } from '../api'; 

@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType('[Products Page] Load Productss'),
    exhaustMap(() => this.productControllerService.getAllProducts()
      .pipe(
        map(products => ({ type: '[Products API] Products Loaded Success', payload: products })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productControllerService: ProductControllerService
  ) {}
}