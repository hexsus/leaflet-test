import { Injectable } from '@angular/core';

@Injectable()
export class MapServiceService {

  constructor() { }

  map;

  set setMap(map) {
    this.map = map;
  }

  get getMap() {
    return this.map;
  }
}
