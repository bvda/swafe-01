import { ViewEncapsulation } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs/operators';
import { Car } from 'src/app/car.service';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  const expectedCar: Car = {
    id: "edb25ed1-3e8e-4ec5-a62a-3113ff6ad15b",
    make: "Ford",
    model: "Econoline E250",
    year: 1994,
    vin: "2T1BURHE1FC333629"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.car = expectedCar;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise remove event when clicked', () => {
    let clickedCarEntry: string | undefined
		let de = fixture.debugElement.query(By.css('.remove'))
		component.remove.pipe(first()).subscribe((clicked: string) => clickedCarEntry = clicked)
		  de.triggerEventHandler('click', expectedCar.id)
		  expect(clickedCarEntry).toBe(expectedCar.id)
  });
});
