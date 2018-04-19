import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guided-tour',
  templateUrl: './guided-tour.component.html',
  styleUrls: ['./guided-tour.component.scss']
})
export class GuidedTourComponent implements OnInit {

 selectedSlide: number = 1;

  constructor() { }

  ngOnInit() {
  }

  updateSlideNav(newSlide: number) {
    if (this.selectedSlide === newSlide) {
      this.selectedSlide = newSlide;
    } else {
      this.selectedSlide = newSlide;
    }
    window.scrollTo(0,0)
  }

  prevSlide() {
    if (this.selectedSlide > 1 ) {
      this.selectedSlide--;
    } else {
      this.selectedSlide = 15;
    }
    window.scrollTo(0, 0)
  }

  nextSlide() {
    if (this.selectedSlide < 15) {
      this.selectedSlide++;
    } else {
      this.selectedSlide = 1;
    }
    window.scrollTo(0, 0)
  }

}
