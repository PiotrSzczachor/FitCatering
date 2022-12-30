import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { HttpClient } from '@angular/common/Http';
import { environment } from 'src/environments/environment';
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-diets-panel',
  templateUrl: './diets-panel.component.html',
  styleUrls: ['./diets-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DietsPanelComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public diets: any[] = [];

  async ngOnInit(): Promise<void> {
    await this.http.get<any>(environment.apiUrl + "Dishes").subscribe(res => res.forEach((dish: any) => this.diets.push(dish)));
  }


}
