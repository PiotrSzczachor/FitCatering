import { Component, OnInit } from '@angular/core';
import { bounceInDownOnEnterAnimation, bounceInRightOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-advertisement-panel',
  templateUrl: './advertisement-panel.component.html',
  styleUrls: ['./advertisement-panel.component.css'],
  animations: [
    bounceInRightOnEnterAnimation(),
    bounceInDownOnEnterAnimation(),
  ]
})
export class AdvertisementPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bounceInRightOnEnter: any;
  bounceInDownOnEnter: any;

}
