import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, circleMarker, circle } from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  options = {
    layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...', pane: 'overlayPane' }),
        circle(latLng(50.061853, 19.936989), {radius: 8000})
    ],
    zoom: 11,
    center: latLng(50.061853, 19.936989),
};

  ngOnInit(): void {
  }

}
