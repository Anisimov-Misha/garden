import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { ISale } from '../../models/sale.model';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-products-page',
  standalone: true,
  imports: [HeaderComponent, ContactComponent, FormsModule], 
  templateUrl: './all-products-page.component.html',
  styleUrl: './all-products-page.component.scss'
})
export class AllProductsPageComponent {
  products: ISale[] = []

  constructor (private ProductService: ProductService) {
    this.products = this.ProductService.getProducts()
  }

  priceFrom: number = 0;
  priceTo: number = 10000;

}
