import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FontAwesomeModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'LuncheriaYusmila';
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
}
