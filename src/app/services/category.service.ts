import { Injectable } from '@angular/core';
import { categoryMock } from '../mocks/category.mock';
import { ICategory } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getCategories(): ICategory[] {
    return categoryMock;
  }

}
