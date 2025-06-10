import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Slide } from '../../interfaces/slide.interface';
import { SliderService } from '../../services/slider.service';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main implements AfterViewInit, OnDestroy{

  images: Slide[] = [];
  currentIndex = 0;
  intervalId!: number;

  constructor(private sliderService: SliderService) {}

  ngAfterViewInit() {
    this.images = this.sliderService.getSlides();
    this.startSlider();
  }

  ngOnDestroy() {
    this.stopSlider
  }
  startSlider() {
    this.intervalId = window.setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }

  stopSlider() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

}
}
