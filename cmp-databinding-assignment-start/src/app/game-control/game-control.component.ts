import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer;
  time_elasped: number = 0;
  odd: number[] = [];
  even: number[] = [];

  @Output() intervalEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.timer = setInterval(() => {
      this.intervalEvent.emit(
        this.time_elasped += 1
      );
      if (this.time_elasped % 2 === 0) {
        this.even.push(this.time_elasped);
      } else {
        this.odd.push(this.time_elasped);
      }
      }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
  }

}
