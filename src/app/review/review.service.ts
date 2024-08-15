import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../review.model';

// Servicio inyectable para manejar operaciones relacionadas con reseñas
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  // URL base para las llamadas a la API
  private baseUrl = 'http://127.0.0.1:8000/api/';

  // Inyección del HttpClient para realizar peticiones HTTP
  constructor(private http: HttpClient) { }

  // Método para obtener todas las reseñas
  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}reviews/`);
  }

  // Método para obtener reseñas filtradas por marca
  getReviewsByBrand(brand: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}reviews/${brand}/`);
  }

  // Método para obtener reseñas filtradas por marca y tipo
  getReviews(brand: string, type: string): Observable<any> {
    return this.http.get(`${this.baseUrl}reviews/${type}${brand}/`);
  }
}