import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  
  private apiUrl = 'http://localhost:4000/api';
headers = new HttpHeaders({
  'Content-Type': 'application/json',
});


  constructor(private http:HttpClient){

  }
  getProducts():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+"/get-products");
  }
  createProduct(data:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/add-product`, data)
  }
  getProduct(_id: any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/get-products/${_id}`)
  }
  

  updateProduct(product:any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${product._id}`,product)
  }
  deleteProduct(_id:any):Observable<any>{
  return this.http.delete(`${this.apiUrl}/delete/${_id}`)
  }

  
  findByTitle(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search-product`);
  }
  
  searchFood(title: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/foods/?title=${title}`);
  }
  
  }
