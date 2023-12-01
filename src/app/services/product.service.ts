import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient){

  }
  getProducts():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/api/get-products");
  }
  createProduct(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/api/add-product", data)
  }
  getProduct(_id: any):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/api/get-products/${_id}`)
  }
  
  updateProduct(data:any, _id: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/api/update/${_id}`,data)
  }
  deleteProduct(_id:string):Observable<any>{
  return this.http.delete(`http://localhost:3000/api/delete/${_id}`)
  }
  
  searchFood(title: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/foods/?title=${title}`);
  }
  
  }
