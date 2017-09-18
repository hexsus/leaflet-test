import {Component, OnInit, ViewChild} from '@angular/core';
import {MapServiceService} from "../map-service.service";

declare let L: any;

@Component({
  selector: 'app-map-controller',
  templateUrl: './map-controller.component.html',
  styleUrls: ['./map-controller.component.css']
})
export class MapControllerComponent implements OnInit {
  @ViewChild('zoom') zoom;
  @ViewChild('layout') layout;

  constructor(public mapServiceService: MapServiceService) {
  }

  ngOnInit() {
    let mapbuttons_div = L.DomUtil.create('div', 'mapbuttons leaflet-bar leaflet-control');

    let zoom = L.control.zoom(
      {
        position: 'topleft'
      }
    );

    zoom.addTo(this.mapServiceService.getMap);

    mapbuttons_div.appendChild(zoom.getContainer());

    this.zoom.nativeElement.appendChild(mapbuttons_div);


    let mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    let grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
      streets = L.tileLayer(mbUrl, {id: 'mapbox.streets', attribution: mbAttr});

    let baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
    let overlays;
    let options = {
      collapsed: false
    };
    let layout = L.control.layers(baseLayers, overlays, options );
    let mapbuttons_div2 = L.DomUtil.create('div', 'layout');
    layout.addTo(this.mapServiceService.getMap);

    mapbuttons_div2.appendChild(layout.getContainer());

    this.layout.nativeElement.appendChild(mapbuttons_div2);

  }

}
