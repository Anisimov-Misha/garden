import { Component, OnInit } from '@angular/core';
import { ContactComponent } from "../../components/contact/contact.component";
import { HeaderComponent } from "../../components/header/header.component";
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ErrorPageComponent } from "../error-page/error-page.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ContactComponent, HeaderComponent, ErrorPageComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit{

  constructor(private route: ActivatedRoute, private productService: ProductService) {}
  
  product: any = null;

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(productId);
  }

  counter = 1

  minusCount():void {
    if (this.counter > 1) {
      this.counter = this.counter - 1
    }
  }

}
