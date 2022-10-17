
import { Component, Input, OnInit } from '@angular/core';
import productsdata from '../../products.json';
import { Products } from 'src/app/Products';
import { ProductService } from 'src/app/product.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'; 


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Products[] = productsdata;

  keyword: string = '';
  catStatus = 'all';
  myForm: FormGroup; 
  filteredProducts: any = []; 
  PriceFilter = [ 
    { 
      "Value": 10, 
      "DisplayText": "$10" 
    }, 
    { 
      "Value": 20, 
      "DisplayText": "$20" 
    }, 
    { 
      "Value": 30, 
      "DisplayText": "$30" 
    }, 
    { 
      "Value": 40, 
      "DisplayText": "$40" 
    }, 
    { 
      "Value": 50, 
      "DisplayText": "$50" 
    }] 

  p: number = 1;  
  total: number = this.products.length;
  
  constructor(private productService: ProductService, private fb: FormBuilder) { 
    this.myForm = this.fb.group({ 
      filterProduct: [''] 
    }) 
  }

  getProductsFromServices(){
    this.productService.getProduct().subscribe(
      (updatedProducts) => {
        this.products = updatedProducts
      }
    )
  }

  getValue(index: number) { 
    if(index === 0) 
      return {  
        lower: 0,
        upper: this.PriceFilter[index].Value,
        displayText: `$0 - ${this.PriceFilter[index].DisplayText}`
      }; 
    else { 
      return {  
        lower: this.PriceFilter[index - 1].Value,  
        upper: this.PriceFilter[index].Value, 
        displayText: `${this.PriceFilter[index - 1].DisplayText} - ${this.PriceFilter[index].DisplayText}`
      }; 
    } 
  } 

  ngOnInit(): void {
    this.getProductsFromServices()

    
    this.filteredProducts = [...this.products]; 
 
    this.myForm.get('filterProduct').valueChanges.subscribe( 
      value => { 
        console.log(value); 
        this.filteredProducts = [...this.products.filter(products => products.price >= value.lower && products.price <= value.upper )] 
      } 
    ) 
  }

  SelectedPro : Products | undefined;

  onSelect(pro:Products): void {
    this.SelectedPro = pro;
    console.log(`SelectedPro = ${JSON.stringify(this.SelectedPro)}`)
  }

  getShowCat(category: string){
    const all = this.catStatus === 'all';
    const christmas = this.catStatus === 'christmas';
  }
}
