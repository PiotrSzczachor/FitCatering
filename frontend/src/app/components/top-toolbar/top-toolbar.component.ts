import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { CheckOutService } from 'src/app/services/check-out.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { ShoppingCartPanelComponent } from '../shopping-cart-panel/shopping-cart-panel.component';
import { Router } from '@angular/router';

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
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  isScrolled : boolean = false;

  @HostListener("window:scroll") onScroll(){
    this.isScrolled = window.scrollY >= 100 ? true : false;
  }

  dietsButtonClick(){
    this.scroller.scrollToAnchor("diets-content");
  }
  
  mainPageButtonClick(){
    this.router.navigate(['home']);
  }

  menuButtonClick(){
    this.router.navigate(['menu']);
  }

  openShoppingCart(){
    if(this.checkOutService.productsNumber > 0){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      let dialogRef = this.dialog.open(ShoppingCartPanelComponent, dialogConfig);
    }
  }
}
