import { Component } from '@angular/core';

@Component({
  selector: 'app-wether',
  templateUrl: './wether.component.html',
  styleUrls: ['./wether.component.css']
})
export class WetherComponent {
  temp: number;
  state: string;

  constructor() {
    this.temp = 20;
    this.state = 'Темно';
  }

  warm() {
    this.temp++
    this.changeState();
  }
  cold() {
    this.temp--
    this.changeState();
  }
  changeState() {
    if (this.temp < 10) {
      this.state = "Всё, конец!"
    } else if (this.temp < 20) {
      this.state = "Холодно";
    } else if (this.temp < 26) {
      this.state = "Нормально"
    } else {
      this.state = "Жарко"
    }
  }
  theend() {
    this.temp = 0
    this.changeState();
  }
  changeTemp(t: number) {
    if (t >= -8 && t <= 38) {
      this.temp = t;
    }
  }
}
