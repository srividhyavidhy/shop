import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:any[]=[];
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
          alert("User Creation Done");
          this.router.navigate(['/productlist']);
         }
         else{
          alert("Failed to create employee");
          
         }
      })
    }
  }
}
