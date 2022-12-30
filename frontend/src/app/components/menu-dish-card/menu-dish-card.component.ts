import { Component, Input, OnInit } from '@angular/core';
import { CheckOutService } from 'src/app/services/check-out.service';

@Component({
  selector: 'app-menu-dish-card',
  templateUrl: './menu-dish-card.component.html',
  styleUrls: ['./menu-dish-card.component.css']
})
export class MenuDishCardComponent implements OnInit {

  constructor(private checkOutService: CheckOutService) { }

  ngOnInit(): void {
  }

  @Input() imgUrl: string | undefined;
  @Input() name: string | undefined;
  @Input() cuisine: string | undefined;
  @Input() type: string | undefined;
  @Input() price: number | undefined;
  
  dishesAddedCounter: number = 0;

  dishAdded(){
    this.dishesAddedCounter++;
    this.checkOutService.productsNumber++;
    const dishDTO = {
      imgUrl: this.imgUrl,
      name: this.name,
      price: this.price,
      quantity: this.dishesAddedCounter
    }
    this.checkOutService.addProductToProductsList(dishDTO);
  }

  dishDeleted(){
    if(this.dishesAddedCounter > 0){
      this.dishesAddedCounter--;
      this.checkOutService.productsNumber--;
      const dishDTO = {
        imgUrl: this.imgUrl,
        name: this.name,
        price: this.price,
        quantity: this.dishesAddedCounter
      }
      this.checkOutService.removeProductsFromProductsList(dishDTO);
    }
  }

}
