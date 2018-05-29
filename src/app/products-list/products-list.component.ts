import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';


@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styles: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  public products = [];
  public textSearch = '';
  public errorMsg;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(data => this.products = data,
                error => this.errorMsg = error);
  }
}