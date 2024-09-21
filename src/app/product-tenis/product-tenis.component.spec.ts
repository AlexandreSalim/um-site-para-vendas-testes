import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTenisComponent } from './product-tenis.component';

describe('ProductTenisComponent', () => {
  let component: ProductTenisComponent;
  let fixture: ComponentFixture<ProductTenisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductTenisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductTenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
