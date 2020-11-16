import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.class';

const baseurl = "http://localhost:8080/api/products/";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Product[]> {
    return this.http.get(`${baseurl}`) as Observable<Product[]>;
  }

  get(id: number): Observable<Product> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Product>;
  }
  change (product:Product): Observable<Product> {
    return this.http.put(`${baseurl}/${product.id}`, product) as Observable<Product>;
  }
}
