import { Drink } from './../interfaces/drink.interface';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private drinks: Drink[] = [
      {
        id: 1,
        name: 'Refresco Pepsi',
        price: 3,
        imageUrl: 'https://picsum.photos/id/1018/1920/1080',
        category: 'Gaseosa'
      },
      {
        id: 2,
        name: 'Refresco Natural',
        price: 3.50,
        imageUrl: 'https://picsum.photos/id/1015/1920/1080',
        category: 'refrescos',
        isFeatured: true
      },
      // Se puede agregar mas bebidas
    ];

    constructor() { }

    getFeaturedDrinks(): Drink[] {
      return this.drinks.filter(drink => drink.isFeatured);
    }

    getAllDrinks(): Drink[] {
      return this.drinks;
    }

    getDrinkById(id: number): Drink {
      const drink = this.drinks.find(d => d.id === id);
      if (!drink) {
        throw new Error (`Bebida con ID ${id} no encontrada`);
      }
      return drink;
    }
}
