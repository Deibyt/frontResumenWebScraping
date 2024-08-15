import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewService } from './review.service';
import { Review } from '../review.model';

interface Summary {
  resumen_opiniones: string;
  referencia: string;
  promedio_calificaciones: number;
}

type BrandKey = 'Chevrolet' | 'Toyota' | 'Volkswagen';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {
  reviews: Review[] = [];
  summary: Summary | null = null;
  brands = ['Chevrolet', 'Toyota', 'Volkswagen'];
  selectedBrand: string = '';
  selectedOption: string = '';
  showTable: boolean = true;
  isLoading: boolean = false;

  brandImages = {
    'Chevrolet': 'assets/images/chevrolet-sail.png',
    'Toyota': 'assets/images/Hilux.png',
    'Volkswagen': 'assets/images/volkswagen-golf.png'
  };

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.loadAllReviews();
  }

  
  loadAllReviews() {
    this.reviewService.getAllReviews().subscribe(
      data => {
        this.reviews = data;
        this.showTable = true;
        this.summary = null;
      },
      error => console.error('Error fetching all reviews:', error)
    );
  }

  onBrandChange() {
    if (this.selectedBrand && this.selectedOption) {
      this.loadSelectedData();
    }
  }

  onOptionChange() {
    if (this.selectedBrand && this.selectedOption) {
      this.loadSelectedData();
    }
  }

  loadSelectedData() {
    this.isLoading = true;
    switch (this.selectedOption) {
      case 'data':
        this.reviewService.getReviewsByBrand(this.selectedBrand.toLowerCase()).subscribe(
          data => {
            this.reviews = data;
            this.showTable = true;
            this.summary = null;
            this.isLoading = false;
          },
          error => {
            console.error(`Error fetching ${this.selectedBrand} reviews:`, error);
            this.isLoading = false;
          }
        );
        break;
      case 'positive':
      case 'negative':
        this.reviewService.getReviews(this.selectedBrand, this.selectedOption).subscribe(
          (data: Summary) => {
            this.summary = data;
            this.showTable = false;
            this.reviews = [];
            this.isLoading = false;
          },
          error => {
            console.error(`Error fetching ${this.selectedOption} ${this.selectedBrand} reviews:`, error);
            this.isLoading = false;
          }
        );
        break;
    }
  }

  getImageForBrand(brand: string): string {
    return this.brandImages[brand as BrandKey] || '';
  }
}