import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/products/Products';

@Component({
  selector: 'app-popupdetails',
  templateUrl: './popupdetails.component.html',
  styleUrls: ['./popupdetails.component.css']
})
export class PopupdetailsComponent implements OnInit {

  @Input() products: Products;

  constructor() { }

  ngOnInit(): void {
  }

}
