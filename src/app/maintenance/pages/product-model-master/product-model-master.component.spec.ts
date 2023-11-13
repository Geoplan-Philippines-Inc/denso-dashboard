import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModelMasterComponent } from './product-model-master.component';

describe('ProductModelMasterComponent', () => {
  let component: ProductModelMasterComponent;
  let fixture: ComponentFixture<ProductModelMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductModelMasterComponent]
    });
    fixture = TestBed.createComponent(ProductModelMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
