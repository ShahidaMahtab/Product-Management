import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  declarations: [
    ProductListComponent,
    SearchProductComponent,
    FilterProductComponent,
    ProductFormComponent,
  ],
  imports: [CommonModule, NzPaginationModule],
})
export class ProductsModule {}
