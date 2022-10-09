import { TestBed } from '@angular/core/testing';
import { toArray } from 'rxjs/operators';

import { Car, CarService } from './car.service';
import { DATA } from './MOCK_DATA';

const expectedEntries: ReadonlyArray<Car> = [{"id":"b92544b0-7542-4d03-bd96-c861a52e4b87","make":"Scion","model":"xA","year":2006,"vin":"KNAFU5A26B5000809"},
{"id":"f5c1c335-7fe8-47c1-ad90-0533d43825ce","make":"Honda","model":"Accord","year":1995,"vin":"1G6DJ8EV6A0469082"},
{"id":"a6db4fcb-6899-4a64-bece-0f76672b05c4","make":"Acura","model":"Integra","year":1993,"vin":"WAUDH48HX7K532105"},
{"id":"4fb6b309-3054-4406-b97d-c0313947523c","make":"Shelby","model":"GT500","year":1968,"vin":"WVGEF9BP0ED568814"},
{"id":"5f9933db-37c8-4d56-8861-174d72015ba8","make":"Nissan","model":"Murano","year":2011,"vin":"KMHHT6KD4BU719708"},]

describe('CarService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of car object', (done: DoneFn) => {
    service.getCars().subscribe(value => {
      expect(value).toEqual(DATA);
      expect(value).toHaveSize(DATA.length)
      done();
    })
  });

  it('should filter based on make', (done: DoneFn) => {
    const make = 'Tesla';
    service.getCarsByMake(make)
    service.data$.subscribe(value => {
      expect(value).toEqual(DATA.filter(c => c.make == make))
      done();
    })
  });

  it('should reset filter', (done: DoneFn) => {
    service.clear()
    service.data$.subscribe(value => {
      expect(value).toEqual(DATA);
      expect(value).toHaveSize(DATA.length);
      done();
    })
  });

  it('should remove car from data$', (done: DoneFn) => {
    service.remove(expectedEntries[0].id)
    service.data$.subscribe(value => {
      expect(value).toHaveSize(DATA.length - 1)
      done();
    })
  });

  it('Get car makes', (done: DoneFn) => {
    let values = []
    service.getCarMakes().subscribe(value => {
      values.push(value)
    })
    const data = new Set(DATA.map(c => c.make))
    expect(values.length).toEqual(data.size)
    done();
  });
});
