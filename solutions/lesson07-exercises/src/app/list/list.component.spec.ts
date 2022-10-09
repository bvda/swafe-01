import { Component, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Car, CarService } from '../car.service';

import { ListComponent } from './list.component';

export const DATA: ReadonlyArray<Car> = [{"id":"b92544b0-7542-4d03-bd96-c861a52e4b87","make":"Scion","model":"xA","year":2006,"vin":"KNAFU5A26B5000809"},
{"id":"f5c1c335-7fe8-47c1-ad90-0533d43825ce","make":"Honda","model":"Accord","year":1995,"vin":"1G6DJ8EV6A0469082"},
{"id":"a6db4fcb-6899-4a64-bece-0f76672b05c4","make":"Acura","model":"Integra","year":1993,"vin":"WAUDH48HX7K532105"},
{"id":"4fb6b309-3054-4406-b97d-c0313947523c","make":"Shelby","model":"GT500","year":1968,"vin":"WVGEF9BP0ED568814"},
{"id":"5f9933db-37c8-4d56-8861-174d72015ba8","make":"Nissan","model":"Murano","year":2011,"vin":"KMHHT6KD4BU719708"},]

let page: CarListPage;
let component: ListComponent;
let fixture: ComponentFixture<ListComponent>;

describe('ListComponent', () => {
  let spy = jasmine.createSpyObj('CarService', {
    getCars: of(DATA),
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ListComponent,
        FilterComponentStub,
        ItemComponentStub,
      ],
      providers: [{
        provide: CarService, useValue: spy
      }]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ListComponent);
      fixture.detectChanges()
      component = fixture.componentInstance;
      return fixture.whenStable().then(() => {
        page = new CarListPage();
      })
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#template', () => {
    it(`should render ${DATA.length} rows`, () => {
      expect(page.carRows.length).toBe(DATA.length)
    })  
  })

  it('should raise remove event when clicked', () => {
    const remove = DATA[0]
    spyOn(component, "remove")
		let de = fixture.debugElement.query(By.css('.app-item'))
    de.triggerEventHandler('remove', remove.id);
    expect(component.remove).toHaveBeenCalledWith(remove.id)
  });
});

class CarListPage { 
  carRows: HTMLElement[]
  constructor() { 
    const rows = fixture.nativeElement.querySelectorAll('app-item')
    this.carRows = Array.from(rows)
  }
}

@Component({ selector: 'app-filter', template: ''})
class FilterComponentStub { 
  @Input() car!: Car;
}
@Component({ selector: 'app-item', template: ''})
class ItemComponentStub { 
  @Input() car!: Car;
}