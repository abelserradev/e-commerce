import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms'; 
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  imports: [CommonModule,FaIconComponent, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faYoutube = faYoutube;

  cartItemsCount: number = 0;
  showSearch: boolean = false;

  isSearchVisible = false;
  searchQuery = '';

  toggleSearch() {
      this.isSearchVisible = !this.isSearchVisible;
      if (this.isSearchVisible) {
        setTimeout(() => {
          const searchInput = document.querySelector('.search-input') as HTMLInputElement;
          searchInput?.focus();
        }, 0);
      }
    }


  //metodo para manejar las busquedas
  search() {
    if (this.searchQuery.trim()) {
      console.log('buscando', this.searchQuery);
      
    }
    this.isSearchVisible = false;
  }

   
  @ViewChild('searchContainer') searchContainer!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.searchContainer.nativeElement.contains(event.target)) {
      this.isSearchVisible = false;
    }
  }

}
