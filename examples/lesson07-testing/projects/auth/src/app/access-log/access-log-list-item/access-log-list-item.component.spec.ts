import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { first } from 'rxjs/operators';
import { AccessLogEntry } from '../../access-log.service';

import { AccessLogListItemComponent } from './access-log-list-item.component';

describe('AccessLogListItemComponent', () => {
  let component: AccessLogListItemComponent;
  let fixture: ComponentFixture<AccessLogListItemComponent>;

  let expectedAccessLogEntry = { 
    "id":"3527a51c-f207-4ff6-96bc-143ab2b27d0a",
    "mac_address":"8C-81-3F-23-59-C8",
    "ip_address": {
      "v4":"180.104.70.20",
      "v6":"6c65:90d9:c5b0:e1f9:c99e:a92e:3b1c:1d1"
    },
    "user_agent":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:29.0) Gecko/20120101 Firefox/29.0"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        AccessLogListItemComponent 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessLogListItemComponent);
    component = fixture.componentInstance;
    component.entry = expectedAccessLogEntry

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Display', () => {
    it('should display mac_address', () => {
      const element = fixture.nativeElement.querySelector('#mac_address')
      expect(element.textContent).toBe(expectedAccessLogEntry.mac_address)
    })
  
    it('should display ip_address.v4', () => {
      const element = fixture.nativeElement.querySelector('#v4');
      expect(element.textContent).toContain(expectedAccessLogEntry.ip_address.v4)
    })
  
    it('should display ip_address.v6', () => {
      const element = fixture.nativeElement.querySelector('#v6');
      expect(element.textContent).toContain(expectedAccessLogEntry.ip_address.v6)    
    })
  
    it('should display user_agent', () => {
      const element = fixture.nativeElement.querySelector('.user-agent');
      expect(element.textContent).toContain(expectedAccessLogEntry.user_agent)    
    })
  })

  describe('Interaction', () => {
    it('should raise removeEntry event when clicked', () => {
      let clickedAccessLogEntry: string | undefined
      component.removeEntry.pipe(first()).subscribe((clicked: string) => clickedAccessLogEntry = clicked)
      let de = fixture.debugElement.query(By.css('.remove'))
      de.triggerEventHandler('click', expectedAccessLogEntry.id)
      expect(clickedAccessLogEntry).toBe(expectedAccessLogEntry.id)
    })
  })
});
