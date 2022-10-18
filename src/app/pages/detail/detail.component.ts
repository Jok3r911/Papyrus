import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/products/Products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() products: Products | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    
  ) {}

  ngOnInit(): void {
    this.getProductFromRoute();
  }

  getProductFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductFromId(id).subscribe(products => this.products = products);
  }

}
