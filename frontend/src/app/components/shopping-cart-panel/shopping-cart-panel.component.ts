import { Component, OnInit } from '@angular/core';
import { CheckOutService } from 'src/app/services/check-out.service';


@Component({
  selector: 'app-shopping-cart-panel',
  templateUrl: './shopping-cart-panel.component.html',
  styleUrls: ['./shopping-cart-panel.component.css']
})
export class ShoppingCartPanelComponent implements OnInit {

  public productsList: any[] = [];
  public columnsToDisplay = ["Image", "Dish", "Quantity", "Price"];
  public total: number = 0;

  constructor(
    private checkOutService: CheckOutService
  ) { }

  ngOnInit(): void {
    this.productsList = this.checkOutService.getProductsList();
    this.productsList.forEach(product => this.total += product.quantity * product.price);
  }


}
