import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopChristmasComponent } from './shop-christmas.component';

describe('ShopChristmasComponent', () => {
  let component: ShopChristmasComponent;
  let fixture: ComponentFixture<ShopChristmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopChristmasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopChristmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
