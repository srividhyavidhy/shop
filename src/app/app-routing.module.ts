import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CreateProductComponent } from './curd/create-product/create-product.component';
import { UpdateProductComponent } from './curd/update-product/update-product.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:"create-product", component:CreateProductComponent},
  {path:'update/:_id', component:UpdateProductComponent},
  {path:"admin", component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
