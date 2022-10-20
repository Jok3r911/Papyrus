import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopWeddingComponent } from './shop-wedding.component';

describe('ShopWeddingComponent', () => {
  let component: ShopWeddingComponent;
  let fixture: ComponentFixture<ShopWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopWeddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
