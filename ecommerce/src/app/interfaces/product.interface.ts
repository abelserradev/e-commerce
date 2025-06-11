export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isBestSeller?: boolean; // Opcional: para marcar productos destacados
}