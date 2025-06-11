import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Drink } from '../../interfaces/drink.interface';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from '../../services/drink.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bebidas',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './bebidas.html',
  styleUrl: './bebidas.scss'
})
export class Bebidas implements OnInit{
  faCartPlus= faCartPlus;
  drink?: Drink;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private drinkService : DrinkService

  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      try {
        this.drink = this.drinkService.getDrinkById(+id);
      } catch (e) {
        this.error = true;
      } finally{
        this.loading = false
      }
    } else {
      this.error = true;
      this.loading = false;
    }
  }

  addToCart(drink: Drink): void {
    // Implementa la lógica para agregar al carrito
    console.log('Agregando al carrito:', drink);
    // Ejemplo:
    // this.cartService.addToCart(drink);
    // this.showSuccessAlert();
  }

}
