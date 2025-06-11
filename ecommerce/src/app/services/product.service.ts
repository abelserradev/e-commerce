import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServices {
  private products: Product[] = [
      {
        id: 1,
        name: 'Producto Premium',
        price: 99.99,
        imageUrl: 'https://picsum.photos/id/1018/1920/1080',
        isBestSeller: true
      },
      {
        id: 2,
        name: 'Producto Estándar',
        price: 129.99,
        imageUrl: 'https://picsum.photos/id/1018/1920/1080',
        isBestSeller: true
      },
      {
        id: 3,
        name: 'Producto Básico',
        price: 79.99,
        imageUrl: 'https://picsum.photos/id/1018/1920/1080',
        isBestSeller: true
      },
      // Puedes agregar más productos aquí
    ];

    getBestSellers(): Product[] {
      // O si prefieres los 3 primeros (ejemplo):
      return this.products.slice(0, 3);
    }
}
