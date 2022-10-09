import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger change event', () => {
    let de: HTMLSelectElement = fixture.debugElement.query(By.css('.car-make-select')).nativeElement; 
    de.value = de.options[0].value;
    de.dispatchEvent(new Event('change')) 
    fixture.detectChanges();
    fixture.whenStable().then(_ => {
      let text = de.options[de.selectedIndex].label;
      expect(text).toBe("Scion")
    })
    
  });
});
