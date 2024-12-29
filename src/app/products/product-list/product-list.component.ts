import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Product[] = []; // All products
  displayedProducts: Product[] = []; // Products to display on the current page
  currentPage = 1; // Current page number
  pageSize = 5; // Number of products per page
  private subscription: Subscription = new Subscription();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    const productSubscripton = this.productService.getProducts().subscribe(
      (data) => {
        this.products = data.products; // Set the full product list
        this.updateDisplayedProducts(); // Initialize displayed products
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
    this.subscription.add(productSubscripton);
  }

  updateDisplayedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedProducts = this.products.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayedProducts();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
