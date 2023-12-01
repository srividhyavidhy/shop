import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateProductComponent } from './curd/create-product/create-product.component';
import { UpdateProductComponent } from './curd/update-product/update-product.component';
import { ProductListComponent } from './curd/product-list/product-list.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
