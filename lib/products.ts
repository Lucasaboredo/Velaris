export interface Product {
  id: number;
  name: string;
  image: string;
  price?: string;
  description?: string;
  category: string;
}

export const products: Product[] = [
  { id: 1, name: "Vainilla Esencial", image: "/1.jpeg", category: "Colección Artesanal" },
  { id: 2, name: "Lavanda Relajante", image: "/2.jpeg", category: "Colección Artesanal" },
  { id: 3, name: "Cítricos Revitalizantes", image: "/3.jpeg", category: "Colección Artesanal" },
  { id: 4, name: "Sándalo & Neroli", image: "/1.jpeg", category: "Colección Premium" },
  { id: 5, name: "Coco & Vainilla", image: "/2.jpeg", category: "Colección Premium" },
  { id: 6, name: "Bosque de Pinos", image: "/3.jpeg", category: "Colección Especial" },
];
