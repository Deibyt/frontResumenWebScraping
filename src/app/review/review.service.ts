import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}reviews/`);
  }

  getReviewsByBrand(brand: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}reviews/${brand}/`);
  }

  getReviews(brand: string, type: string): Observable<any> {
    return this.http.get(`${this.baseUrl}reviews/${type}${brand}/`);
  }
}