import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProductCategoryComponent } from './filter-product-category.component';

describe('FilterProductCategoryComponent', () => {
  let component: FilterProductCategoryComponent;
  let fixture: ComponentFixture<FilterProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProductCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
