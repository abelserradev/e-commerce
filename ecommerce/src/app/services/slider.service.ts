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
                title: '16 años acompañando tus mañanas. <br> <span>⏰ Lunes a Sábados - 6:30am a la 2:00pm</span>'
            },
            {
                url: 'https://picsum.photos/id/1015/1920/1080', 
                alt: 'Oferta 2',
                title: '16 años acompañando tus mañanas. <br> <span>⏰ Lunes a Sábados - 6:30am a la 2:00pm</span>'
            },
            {
                url: 'https://picsum.photos/id/1016/1920/1080', 
                alt: 'Oferta 3',
                title: '16 años acompañando tus mañanas. <br> <span>⏰ Lunes a Sábados - 6:30am a la 2:00pm</span>'
            }
        ];
    }
}