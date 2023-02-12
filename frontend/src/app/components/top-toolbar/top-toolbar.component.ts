import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CheckOutService } from 'src/app/services/check-out.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { ShoppingCartPanelComponent } from '../shopping-cart-panel/shopping-cart-panel.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {

  constructor(
    private scroller: ViewportScroller,
    public checkOutService: CheckOutService,
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  isScrolled : boolean = false;
  @Input() isMainPage: boolean = false;

  @HostListener("window:scroll") onScroll(){
    this.isScrolled = window.scrollY >= 100 ? true : false;
  }

  dietsButtonClick(){
    this.router.navigate(['home']);
    this.scroller.scrollToAnchor("diets-content");
  }
  
  mainPageButtonClick(){
    this.router.navigate(['home']);
  }

  menuButtonClick(){
    this.router.navigate(['menu']);
  }

  shippingZoneButtonClick(){
    this.router.navigate(['shipping']);
  }

  contactButtonClick(){
    this.router.navigate(['contact']);
  }

  clientPanelButtonClick(){
    if(localStorage.getItem('token')){
      if(localStorage.getItem('isAdmin') == 'true'){
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['client']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }

  openShoppingCart(){
    if(this.checkOutService.productsNumber > 0){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      let dialogRef = this.dialog.open(ShoppingCartPanelComponent, dialogConfig);
    }
  }

  readLocalStorageValue(key: string) {

    return localStorage.getItem(key);
  }

  logOut(){
    this.authService.doLogout();
  }
}
