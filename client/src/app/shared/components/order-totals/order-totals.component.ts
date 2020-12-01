import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasketTotals } from '../../models/basket';
import { BasketService } from '../../../basket/basket.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})

export class OrderTotalsComponent implements OnInit {
  @Input() shippingPrice: number = 0;
  @Input() subtotal: number = 0;
  @Input() total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
