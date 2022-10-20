import { Component, OnInit } from '@angular/core';
import productsdata from 'src/app/products/products.json';
import { Products } from 'src/app/products/Products';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: Products[] = productsdata;

  constructor(private productService: ProductService) { }

  getProductsFromServices(){
    this.productService.getProduct().subscribe(
      (updatedProducts) => {
        this.products = updatedProducts
      }
    )
  }

  ngOnInit(): void {
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) +'-' +today.getFullYear();
    var time = today.getHours() + ": " + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' '+ time
    console.log(dateTime);
    document.getElementById("hvn").innerText = dateTime;

    this.getProductsFromServices()
  }

}
