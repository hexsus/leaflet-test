import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {MapServiceService} from "../map-service.service";

declare let L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterContentInit {
  @ViewChild('map') map;
  constructor(public mapServiceService:MapServiceService) {
    console.log(L);
  }

  ngAfterContentInit () {

    let cities = L.layerGroup();

    L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
      L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
      L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
      L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);


    let mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    let grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
      streets = L.tileLayer(mbUrl, {id: 'mapbox.streets', attribution: mbAttr});

    let map = L.map(this.map.nativeElement, {
      center: [39.73, -104.99],
      zoom: 10,
      layers: [grayscale, cities]
    });
    this.mapServiceService.setMap = map;
    let baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };

    let overlays = {
      "Cities": cities
    };

    // L.control.layers(baseLayers, overlays).addTo(map);
  }

  ngOnInit() {

  }

}
