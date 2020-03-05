import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProductsComponent } from './similar-products.component';

describe('SimirarProductsComponent', () => {
  let component: SimilarProductsComponent;
  let fixture: ComponentFixture<SimilarProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
