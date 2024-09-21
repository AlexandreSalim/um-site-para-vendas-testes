import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
   styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  productName: string = '';
  category: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productName = params.get('productName')!;
      this.category = params.get('category')!;
    });
  }
}
