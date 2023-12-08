import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  _id:any;
  products:any[]=[];
  productToUpdate:any = {
    _id:"",
    vendorName:"",
    store_id:"",
    name: "",
    productDescription:"",
    price:"",
    categoryName:"",
    deliveryTimeSpan:"",
    sub_cat_name:"",
    images: ""
  };
  selectedUser:string='';
  constructor(private product:ProductService,private router:Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(){
    this.product.getProducts().subscribe((res:any)=>{
      this.products=res.data;
      console.log('productsArray')
    });
   }
  
   deleteProduct(event:any, _id:string){
    if(confirm('Are your sure you want to delete this data ?'))
    {
      event.target.innerText ="Deleting....";
  
      this.product.deleteProduct(_id).subscribe((res:any)=>{
        this.loadProducts();
        if(res){
          alert("Product Delete Done");
          this.router.navigate(['/products']);
         }
         else{
          alert("Failed to delete employee");
          
         }
      })
    }
  }

edit(products:any){
  this.productToUpdate = products;
}

updateProduct(){
  this.product.updateProduct(this.productToUpdate).subscribe((res)=>{
    if(res){
    
      this.loadProducts();
      alert("Update product successfully");
      this.router.navigate(['/products']);
     }
     else{
      alert("Failed to update product");
      
     }
  
   })
}

}
