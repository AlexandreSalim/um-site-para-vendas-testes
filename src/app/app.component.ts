import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
  // Lista de links principais e sub-links com suas respectivas rotas dinâmicas
  links = [
    {
      name: 'Calças', // Link principal
      route: '/product-calca/calca',
      subLinks: [ // Sub-links dinâmicos com categoria e nome do produto
        { name: 'Calça Jeans', route: '/product-calca', category: 'Roupa', productName: 'jeans' },
        { name: 'Moletom', route: '/product-calca', category: 'Roupa', productName: 'Moletom' },
        { name: 'jogger', route: '/product-calca', category: 'jogger', productName: 'jogger' },
      ]
    },
    {
      name: 'Rádios',
      route: '/product-radio/radio',
      subLinks: [
        { name: 'Rádio', route: '/product-radio', category: 'tecnologia', productName: 'radio1' },
        { name: 'Rádio', route: '/product-radio', category: 'tecnologia', productName: 'radio2' },
        { name: 'Rádio', route: '/product-radio', category: 'tecnologia', productName: 'radio3' },
        { name: 'Iphone', route: '/product-radio', category: 'tecnologia', productName: 'Iphone' },
        { name: 'Samsung', route: '/product-radio', category: 'tecnologia', productName: 'Samsung' },
        { name: 'Xiaomi', route: '/product-radio', category: 'tecnologia', productName: 'Xiaomi' },
      ]
    },
    {
      name: 'Tênis',
      route: '/product-tenis/tenis',
      subLinks: [
        { name: 'Nike', route: '/product-tenis', category: 'tenis', productName: 'Nike' },
        { name: 'Adidas', route: '/product-tenis', category: 'tenis', productName: 'Adidas' },
        { name: 'Puma', route: '/product-tenis', category: 'tenis', productName: 'Puma' }
      ]
    },
    {
      name: 'Pipas e Linhas',
      route: '/product/pipas',
      subLinks: [
        { name: 'Pipas', route: '/product', category: 'pipa', productName: '3-pipas-por-10' },
        { name: 'Linha', route: '/product', category: 'linha', productName: '1-deizao-de-linha-por-12' }
      ]
    }
    // Adicione mais links e sub-links conforme necessário
  ];

  // Array para controlar quais dropdowns estão abertos
  showDropdown: boolean[] = [];

  constructor() {
    // Inicializa todos os dropdowns como fechados
    this.showDropdown = new Array(this.links.length).fill(false);
  }

  // Método para abrir ou fechar o dropdown de acordo com o índice
  toggleDropdown(index: number, status: boolean) {
    this.showDropdown[index] = status;
  }

}
