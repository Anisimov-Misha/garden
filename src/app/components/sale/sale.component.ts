import { Component } from '@angular/core';
import { ISale } from '../../models/sale.model';
import { saleMock } from '../../mocks/sale.mock';

@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss'
})
export class SaleComponent {
  saleFromHttpServer: ISale[] = saleMock;
}
