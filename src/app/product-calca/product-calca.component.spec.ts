import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCalcaComponent } from './product-calca.component';

describe('ProductCalcaComponent', () => {
  let component: ProductCalcaComponent;
  let fixture: ComponentFixture<ProductCalcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCalcaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCalcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
