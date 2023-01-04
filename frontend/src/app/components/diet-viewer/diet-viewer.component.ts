import { HttpClient } from '@angular/common/Http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDiet } from 'src/app/Interfaces/IDiet';
import { environment } from 'src/environments/environment';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
SwiperCore.use([ Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-diet-viewer',
  templateUrl: './diet-viewer.component.html',
  styleUrls: ['./diet-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DietViewerComponent implements OnInit {

  public photos: string[] = [];
  public diet: IDiet | undefined;

  constructor(
      private http: HttpClient,
      private route: ActivatedRoute
    ) { }

  async ngOnInit(): Promise<void> {
    const dietId = this.route.snapshot.paramMap.get('id');
    if(dietId) await this.getDiet(dietId);
    console.log(this.photos);
  }

  private async getDiet(id: string){
    await this.http.get<IDiet>(environment.apiUrl + "Diets/" + id).subscribe(res => {
      this.diet = res;
      this.diet.photosUrls.forEach(photo => this.photos.push(photo))
    });
  }

}
