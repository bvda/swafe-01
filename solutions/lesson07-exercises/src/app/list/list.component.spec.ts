import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Car, CarService } from '../car.service';
import { FilterComponent } from './filter/filter.component';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let spy = jasmine.createSpyObj('CarService', {
    getCars: new Observable<ReadonlyArray<Car>>()
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ListComponent,
        // ItemComponentStub,
      ],
      providers: [{
        provide: CarService, useValue: spy
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// @Component({ selector: 'app-access-log-list-item', template: ''})
// class ItemComponentStub { 
//   @Input() car!: Car;
// }