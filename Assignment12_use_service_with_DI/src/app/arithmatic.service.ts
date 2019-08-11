import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { }

  add(no1: number, no2: number) {
    return no1 + no2;
  }

  sub(no1: number, no2: number) {
    return no1 - no2;
  }
  
}
