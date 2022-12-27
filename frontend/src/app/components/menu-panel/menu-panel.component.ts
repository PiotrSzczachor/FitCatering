import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { environment } from '../../../environments/environment'


@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public dishes: any[] = [];


  async ngOnInit(): Promise<void> {
    await this.http.get<any>(environment.apiUrl + "Dishes").subscribe(res => res.forEach((dish: any) => this.dishes.push(dish)));
  }

}
