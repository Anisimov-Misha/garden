import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [HeaderComponent, ContactComponent],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {

}
