import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNewyearComponent } from './shop-newyear.component';

describe('ShopNewyearComponent', () => {
  let component: ShopNewyearComponent;
  let fixture: ComponentFixture<ShopNewyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopNewyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopNewyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
