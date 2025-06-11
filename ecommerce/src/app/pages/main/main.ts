import { Drink } from './../../interfaces/drink.interface';
import { Product } from './../../interfaces/product.interface';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Slide } from '../../interfaces/slide.interface';
import { SliderService } from '../../services/slider.service';
import { ProductServices } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DrinkService } from '../../services/drink.service';
import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-main',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main implements AfterViewInit, OnDestroy{

  //Iconos a utilizar en el componente
  faCartPlus= faCartPlus;
  faEye = faEye;

  //datos
  images: Slide[] = [];
  currentIndex = 0;
  bestSellers: Product[] = [];
  featuredDrinks: Drink[] = [];

  //control
  isDataLoaded = false;
  private intervalId!: number;

  constructor(
    private sliderService: SliderService,
    private productService: ProductServices,
    private router: Router,
    private drinkService: DrinkService,
  ) {}

  //iniciar la lectura de bebidas
  ngOnInit(): void {
    this.loadInitialData();
  }

  ngAfterViewInit() {
    this.images = this.sliderService.getSlides();
    this.bestSellers = this.productService.getBestSellers();
    this.startSlider();
  }

  addToCart(drink: Drink): void {
    console.log('Agregando al carrito', drink);

    //this.cartService.addToCart(drink);
  }

  viewDetails(drinkId: number): void {
    this.router.navigate(['/bebidas', drinkId]);
  }

  ngOnDestroy() {
    this.stopSlider();
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

  gotoProducts() {
    this.router.navigate(['/productos'])
  }

  private loadInitialData(): void {
    try {
      // Cargar slider
      this.images = this.sliderService.getSlides().map(slide => ({
        ...slide,
        url: this.getCorrectImagePath(slide.url)
      }));

      // Productos más vendidos
      this.bestSellers = this.productService.getBestSellers().map(product => ({
        ...product,
        imageUrl: this.getCorrectImagePath(product.imageUrl)
      }));

      // Bebidas destacadas
      this.featuredDrinks = this.drinkService.getFeaturedDrinks().map(drink => ({
        ...drink,
        imageUrl: this.getCorrectImagePath(drink.imageUrl)
      }));

      this.isDataLoaded = true;

    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

 private getCorrectImagePath(path: string): string {
  // Si ya es una URL absoluta o empieza con http, devuélvela tal cual
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }

  // Si ya incluye 'assets/', devolver directamente
  if (path.startsWith('assets/')) {
    return path;
  }

  // Si no, asume que está dentro de assets/images/
  return `assets/images/${path}`;
}



}
