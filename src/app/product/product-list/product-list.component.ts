import { Component, OnInit } from '@angular/core';
import { ProductService }  from '../product.service';
import { Product } from '../product.class';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(

    private productsrv: ProductService,
  ) { }

  ngOnInit(): void {
      this.productsrv.list().subscribe(
            res => { console.log(res); 
            this.products= res as Product[]
            },
            err => { console.error(err); }
    );
  

    }
  }

