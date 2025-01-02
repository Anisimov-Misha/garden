import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  categories: any[] = [];

  constructor(private CategoryService: CategoryService) {
    this.categories = this.CategoryService.getCategories().slice(0, 4);
  }

}
