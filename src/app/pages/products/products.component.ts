import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  productsArray:any;
  currentProduct: any = {};
  currentIndex = -1;
  search = '';

constructor(private product:ProductService){}
ngOnInit(): void {
  this.loadProducts();
}
loadProducts(){
  this.product.getProducts().subscribe((res:any)=>{
    this.productsArray=res.data;
  });
 }
 


}

