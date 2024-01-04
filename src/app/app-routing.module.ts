import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CreateProductComponent } from './curd/create-product/create-product.component';

import { AdminComponent } from './pages/admin/admin.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './contacts/login/login.component';
import { RegisterComponent } from './contacts/register/register.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:"create-product", component:CreateProductComponent},
  {path:"search/:query", component:SearchComponent},
  {path:"admin", component:AdminComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
