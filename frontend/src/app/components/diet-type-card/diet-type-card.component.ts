import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diet-type-card',
  templateUrl: './diet-type-card.component.html',
  styleUrls: ['./diet-type-card.component.css']
})
export class DietTypeCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @Input() id: number | undefined;
  @Input() imgUrl: string | undefined;
  @Input() dietName: string | undefined;
  @Input() description: string | undefined;
  @Input() isVege: boolean | undefined;

  public routeToDietViewer(){
    this.router.navigate(['diets/' + this.id]);
  }

}
