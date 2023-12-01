import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
  _id:any;
  productsobj:any={
    "_id": "",
    "name": "",
    "vendorName":"",
    "store_id":"",
    "price":"",
    "productDescription":"",
    "categoryName":"",
    "deliveryTimeSpan":"",
    "sub_cat_name":"",
    "images": ""
    }
constructor(private product:ProductService , private route:ActivatedRoute,private router:Router){}
    ngOnInit(): void {
      this._id = this.route.snapshot.paramMap.get('_id');
      alert(this._id);
     
      this.product.getProduct(this._id).subscribe((res)=>{
       this.productsobj = res
      })
     }
     onUpdate(){
     this.product.updateProduct(this.productsobj,this._id).subscribe((res)=>{
       if(res){
         alert("Update food successfully");
         this.router.navigate(['/products']);
        }
        else{
         alert("Failed to update food");
         
        }
     
      })
     
     }
}
