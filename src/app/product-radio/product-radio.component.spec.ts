import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRadioComponent } from './product-radio.component';

describe('ProductRadioComponent', () => {
  let component: ProductRadioComponent;
  let fixture: ComponentFixture<ProductRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductRadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
