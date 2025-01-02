import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [HeaderComponent, ContactComponent],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss'
})

export class CategoriesPageComponent {
  categories: any[] = []
  
  constructor(private CategoryService: CategoryService) {
    this.categories = this.CategoryService.getCategories();
  }
}
