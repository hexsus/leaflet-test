import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapControllerComponent } from './map-controller/map-controller.component';
import {MapServiceService} from "./map-service.service";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MapServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
