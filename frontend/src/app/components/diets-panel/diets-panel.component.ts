import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-diets-panel',
  templateUrl: './diets-panel.component.html',
  styleUrls: ['./diets-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DietsPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //mock json
  dietCards = [
    {
      imgUrl: "../../assets/diets-images/asian-diet.jpg",
      dietName: "Asian diet",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis beatae hic maxime repellat itaque porro ipsa explicabo consectetur a aperiam ipsam, mollitia quae, facilis aut ipsum dolore voluptas magnam quaerat excepturi quibusdam."
    },
    {
      imgUrl: "../../assets/diets-images/fish-diet.jpg",
      dietName: "Fish diet",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis beatae hic maxime repellat itaque porro ipsa explicabo consectetur a aperiam ipsam, mollitia quae, facilis aut ipsum dolore voluptas magnam quaerat excepturi quibusdam."
    },
    {
      imgUrl: "../../assets/diets-images/healthy-diet.jpg",
      dietName: "Healthy diet",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis beatae hic maxime repellat itaque porro ipsa explicabo consectetur a aperiam ipsam, mollitia quae, facilis aut ipsum dolore voluptas magnam quaerat excepturi quibusdam."
    },
    {
      imgUrl: "../../assets/diets-images/italian-diet.jpg",
      dietName: "Italian diet",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis beatae hic maxime repellat itaque porro ipsa explicabo consectetur a aperiam ipsam, mollitia quae, facilis aut ipsum dolore voluptas magnam quaerat excepturi quibusdam."
    },
    {
      imgUrl: "../../assets/diets-images/meat-diet.jpg",
      dietName: "Meat diet",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis beatae hic maxime repellat itaque porro ipsa explicabo consectetur a aperiam ipsam, mollitia quae, facilis aut ipsum dolore voluptas magnam quaerat excepturi quibusdam."
    },
    {
      imgUrl: "../../assets/diets-images/mexican-diet.jpg",
      dietName: "Mexican diet",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis beatae hic maxime repellat itaque porro ipsa explicabo consectetur a aperiam ipsam, mollitia quae, facilis aut ipsum dolore voluptas magnam quaerat excepturi quibusdam."
    },
    {
      imgUrl: "../../assets/diets-images/polish-diet.jpg",
      dietName: "Polish diet",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis beatae hic maxime repellat itaque porro ipsa explicabo consectetur a aperiam ipsam, mollitia quae, facilis aut ipsum dolore voluptas magnam quaerat excepturi quibusdam."
    },
  ]

}
