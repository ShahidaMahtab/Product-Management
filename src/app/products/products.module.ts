import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductCategoryComponent } from './components/filter-product-category/filter-product-category.component';

@NgModule({
  declarations: [ProductsComponent, ProductListComponent, FilterProductCategoryComponent],
  imports: [CommonModule, ProductsRoutingModule, NzPaginationModule],
})
export class ProductsModule {}
