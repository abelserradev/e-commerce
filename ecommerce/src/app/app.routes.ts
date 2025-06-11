import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Bebidas } from './components/bebidas/bebidas';
import { Productos } from './pages/productos/productos';

export const routes: Routes = [
    {
        path: 'main',
        component: Main
    },
     {
        path: 'productos',
        component: Productos
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'bebidas/:id',
        component: Bebidas
    },
];
