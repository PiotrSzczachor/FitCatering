import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet-type-card',
  templateUrl: './diet-type-card.component.html',
  styleUrls: ['./diet-type-card.component.css']
})
export class DietTypeCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() imgUrl: string | undefined;
  @Input() dietName: string | undefined;
  @Input() description: string | undefined;

}
