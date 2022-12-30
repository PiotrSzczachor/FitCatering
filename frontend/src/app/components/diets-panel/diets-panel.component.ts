import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { HttpClient } from '@angular/common/Http';
import { environment } from 'src/environments/environment';
import { IDiet } from 'src/app/Interfaces/IDiet';
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-diets-panel',
  templateUrl: './diets-panel.component.html',
  styleUrls: ['./diets-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DietsPanelComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public diets: IDiet[] = [];

  async ngOnInit(): Promise<void> {
    await this.http.get<IDiet[]>(environment.apiUrl + "Diets").subscribe(res => res.forEach((diet: IDiet) => this.diets.push(diet)));
  }


}
