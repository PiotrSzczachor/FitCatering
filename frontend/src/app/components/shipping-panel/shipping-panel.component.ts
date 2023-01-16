import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-panel',
  templateUrl: './shipping-panel.component.html',
  styleUrls: ['./shipping-panel.component.css']
})
export class ShippingPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  contactButtonClick(){
    this.router.navigate(['contact']);
  }

}
