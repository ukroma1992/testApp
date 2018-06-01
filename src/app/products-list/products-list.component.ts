import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';


@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styles: ['./products-list.component.css']
})



export class ProductsListComponent implements OnInit {
  
  public categories = [
    "All",
    "Amazon Launchpad",
    "Apps & Games",
    "Computers & Accessories",
    "Camera & Photo",
    "Office Products",
    "Automotive",
    "Toys & Games",
    "Arts, Crafts & Sewing",
    "Video Games",
    "Tools & Home Improvement",
    "Home & Kitchen",
    "Sports & Outdoors",
    "Cell Phones & Accessories",
    "Musical Instruments",
    "Books"
  ];
  public products = [];
  public selectedValue = '';
  public textSearch = '';
  public errorMsg;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(data => this.products = data,
                error => this.errorMsg = error);
  }
}