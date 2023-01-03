import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { environment } from '../../../environments/environment'
import { IDish } from 'src/app/Interfaces/IDish';
import SwiperCore, { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);


@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuPanelComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public dishes: IDish[] = [];


  async ngOnInit(): Promise<void> {
    await this.http.get<IDish[]>(environment.apiUrl + "Dishes").subscribe(res => res.forEach((dish: any) => this.dishes.push(dish)));
  }

}
