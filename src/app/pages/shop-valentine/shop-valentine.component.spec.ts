import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopValentineComponent } from './shop-valentine.component';

describe('ShopValentineComponent', () => {
  let component: ShopValentineComponent;
  let fixture: ComponentFixture<ShopValentineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopValentineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopValentineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
