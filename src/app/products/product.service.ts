import { Injectable } from '@angular/core';
import productsdata from './products.json';
import { Products } from './Products';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Products[] = productsdata;

  getProduct(): Observable<Products[]>{
    return of(productsdata);
  }

  getProductFromId(id: number): Observable<any>{
    return of(productsdata.find(products => products.id === id));
  }

  constructor() { }
}
