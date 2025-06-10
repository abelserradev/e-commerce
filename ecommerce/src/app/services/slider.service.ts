import { Injectable } from '@angular/core';
import { Slide } from '../interfaces/slide.interface';

@Injectable({
    providedIn: 'root'
})

export class SliderService {
    constructor() {}

    getSlides(): Slide[] {
        return [
            {
                url: 'https://picsum.photos/id/1018/1920/1080', 
                alt: 'Oferta 1',
                title: '¡Gran oferta de empanadas!'
            },
            {
                url: 'https://picsum.photos/id/1015/1920/1080', 
                alt: 'Oferta 2',
                title: 'Prueba nuestras nuevas recetas'
            },
            {
                url: 'https://picsum.photos/id/1016/1920/1080', 
                alt: 'Oferta 3',
                title: 'Compra en línea y recibe rápido'
            }
        ];
    }
}