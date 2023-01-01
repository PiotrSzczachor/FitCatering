import { HttpClient } from '@angular/common/Http';
import { Component, OnInit } from '@angular/core';
import { IDiscount } from 'src/app/Interfaces/IDiscount';
import { CheckOutService } from 'src/app/services/check-out.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-shopping-cart-panel',
  templateUrl: './shopping-cart-panel.component.html',
  styleUrls: ['./shopping-cart-panel.component.css']
})
export class ShoppingCartPanelComponent implements OnInit {

  public productsList: any[] = [];
  public columnsToDisplay = ["Image", "Dish", "Quantity", "Price"];
  public total: number = 0;
  public discounts: IDiscount[] = [];
  public enteredCode: string = "";
  public discountUsed: boolean = false;
  public wrongDiscountCode: boolean = false;

  constructor(
    private checkOutService: CheckOutService,
    private http: HttpClient
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getDiscounts();
    this.productsList = this.checkOutService.getProductsList();
    this.productsList.forEach(product => this.total += product.quantity * product.price);
  }

  private async getDiscounts(): Promise<void>{
    this.http.get<IDiscount[]>(environment.apiUrl + "Discounts").subscribe(discounts => discounts.forEach(discount => this.discounts.push(discount)));
  }

  onKey(event: any){
    this.enteredCode = event.target.value;
  }

  applyDiscount(): void{
    this.discounts.forEach(discount => {
      if(discount.code === this.enteredCode && this.checkIfDiscountIsActive(discount)){
        this.total *= (100-discount.value)/100;
        this.discountUsed = true;
        this.wrongDiscountCode = false;
      }
    })
    if(!this.discountUsed){
      this.wrongDiscountCode = this.enteredCode !== "";
    }
  }

  checkIfDiscountIsActive(discount: IDiscount): boolean{
    const today = new Date();
    const start = new Date(discount.startDate);
    const end = new Date(discount.endDate);
    return (today >= start && today <= end);
  }


}
