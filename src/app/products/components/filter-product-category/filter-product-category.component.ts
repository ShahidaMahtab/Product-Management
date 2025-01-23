import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filter-product-category',
  templateUrl: './filter-product-category.component.html',
  styleUrls: ['./filter-product-category.component.scss'],
})
export class FilterProductCategoryComponent {
  categories: string[] = [];
  /*   @Output() categorySelected = new EventEmitter<string>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategories().subscribe(
      (data: string[]) => (this.categories = data),
      (error) => console.error('Error fetching categories:', error)
    );
  }

  onCategoryChange(event: Event): void {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    this.categorySelected.emit(selectedCategory);
  } */
}
