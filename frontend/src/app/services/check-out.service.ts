import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  constructor() { }

  public productsNumber: number = 0;
  public productsSet = new Set();
  public productsList: any[] = []

  addProductToProductsList(product: any){
    for(var x of this.productsSet){
      const prod:any = x;
      if(prod.name === product.name && prod.quantity === product.quantity - 1){
        this.productsSet.delete(x);
      }
    }
    this.productsSet.add(product);
    this.productsList = Array.from(this.productsSet);
  }

  removeProductsFromProductsList(product: any){
    for(var x of this.productsSet){
      const prod:any = x;
      if(prod.name === product.name && prod.quantity === product.quantity + 1){
        this.productsSet.delete(x);
      }
    }
    if(product.quantity != 0){
      this.productsSet.add(product);
    }
    this.productsList = Array.from(this.productsSet);
  }
  
  getProductsList(){
    return this.productsList;
  }
}
