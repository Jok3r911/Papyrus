import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMothersdayComponent } from './shop-mothersday.component';

describe('ShopMothersdayComponent', () => {
  let component: ShopMothersdayComponent;
  let fixture: ComponentFixture<ShopMothersdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMothersdayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopMothersdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
