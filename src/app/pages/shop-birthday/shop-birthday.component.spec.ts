import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBirthdayComponent } from './shop-birthday.component';

describe('ShopBirthdayComponent', () => {
  let component: ShopBirthdayComponent;
  let fixture: ComponentFixture<ShopBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBirthdayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
