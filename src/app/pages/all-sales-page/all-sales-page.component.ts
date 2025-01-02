import { Component } from '@angular/core';
import { ISale } from '../../models/sale.model';
import { ProductService } from '../../services/product.service';
import { HeaderComponent } from "../../components/header/header.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: 'app-all-sales-page',
  standalone: true,
  imports: [HeaderComponent, ContactComponent],
  templateUrl: './all-sales-page.component.html',
  styleUrl: './all-sales-page.component.scss'
})
export class AllSalesPageComponent {
  products: ISale[] = []

  constructor (private ProductService: ProductService) {
    this.products = this.ProductService.getProducts()
  }
}
