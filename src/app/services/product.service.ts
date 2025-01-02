import { Injectable } from '@angular/core';
import { ISale } from '../models/sale.model';
import { productsMock } from '../mocks/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = productsMock

  getProducts(): ISale[] {
    return productsMock;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
