import { Product } from '../api';
import { createAction, createActionGroup, props } from '@ngrx/store';

export const ProductsActions = createActionGroup({
    source: 'Products',
    events: {
      'Add': props<Product>(),
      'Remove': props<Product>(),
      'Clear': props<Number>()
    },
  });