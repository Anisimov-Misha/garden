import { Component } from '@angular/core';

import { HeaderComponent } from "../../components/header/header.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { CategoriesComponent } from "../../components/categories/categories.component";
import { ActionComponent } from "../../components/action/action.component";
import { SaleComponent } from "../../components/sale/sale.component";
import { ContactComponent } from "../../components/contact/contact.component";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, CategoriesComponent, ActionComponent, SaleComponent, ContactComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {


}
