import { Component, OnInit } from '@angular/core';
import { ContactComponent } from "../../components/contact/contact.component";
import { HeaderComponent } from "../../components/header/header.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [ContactComponent, HeaderComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent{

}
