import { Component, HostListener } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  imports: [CommonModule, FaIconComponent, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faBars = faBars;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  cartItemscount = 0; // Contador de artículos en el carrito

  // Estados
  isSearchVisible = false;
  isMobileMenuOpen = false;
  screenWidth!: number;
  searchQuery = '';


  // Valores responsivos
  get isMobile(): boolean {
    return this.screenWidth <= 768;
  }

  get isDesktop(): boolean {
    return this.screenWidth > 768;
  }

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = event.target.innerWidth;
    if (this.screenWidth > 768) {
      this.isMobileMenuOpen = false; // Cerrar menú móvil al agrandar pantalla
    }
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  search() {
  if (this.searchQuery.trim()) {
    console.log('Buscando:', this.searchQuery);
    // Aquí puedes llamar a un servicio o navegar a otra página
  }
}

}
