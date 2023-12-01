import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  productobj:any={
    "vendorName":"",
    "store_id":"",
    "name": "",
    "productDescription":"",
    "price":"",
    "categoryName":"",
    "deliveryTimeSpan":"",
    "sub_cat_name":"",
    "images": ""
  }
  constructor(private product:ProductService, private router:Router){}

  ngOnInit(): void {
    
  }

  onSave(){
   this.product.createProduct(this.productobj).subscribe((res:any)=>{
     if(res){
      alert("Food Creation Done");
      this.router.navigate(['/products']);
     }
     else{
      alert("Failed to create employee");
      
     }

   })

  }
}
