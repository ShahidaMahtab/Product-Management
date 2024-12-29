import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://dummyjson.com/products';
  private products$ = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  getProducts(): Observable<{ products: Product[] }> {
    return this.http.get<{ products: Product[] }>(`${this.baseUrl}`);
  }

  getSharedProducts() {
    return this.products$.asObservable();
  }

  fetchAndShareProducts(): void {
    this.getProducts().subscribe((data) => {
      this.products$.next(data.products);
    });
  }
}
