import { identifierModuleUrl } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { AccessLogEntry, AccessLogService, AppDescription } from '../../access-log.service';

import { AccessLogListComponent } from './access-log-list.component';

let fixture: ComponentFixture<AccessLogListComponent>;
let page: AccessLogEntryListPage;
let component: AccessLogListComponent;

describe('AccessLogListComponent', () => {

  const expectedEntries = [
    {"id":"c2d14fbe-c2c3-44ec-9786-547230d01a4e","mac_address":"6A-1F-6F-EA-DB-73","ip_address":{"v4":"62.149.251.46","v6":"9361:3412:d0da:4922:a5eb:223e:35c8:fb71"},"user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:25.0) Gecko/20100101 Firefox/25.0"},
    {"id":"c02d8d70-5ec1-44d4-a9b2-de6ae9e89229","mac_address":"8C-5B-DA-17-4C-32","ip_address":{"v4":"128.178.58.22","v6":"8b18:d2da:f580:6c53:8701:69fa:ba2f:6d02"},"user_agent":"Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.120 Safari/535.2"},
    {"id":"b4a9f13b-f7a5-43b7-96be-fa482e3ced09","mac_address":"BD-10-10-37-4B-F3","ip_address":{"v4":"31.158.105.229","v6":"6553:2d4a:1b2b:3faf:cf7a:f36a:af78:4e34"},"user_agent":"Mozilla/5.0 (Macintosh; AMD Mac OS X 10_8_2) AppleWebKit/535.22 (KHTML, like Gecko) Chrome/18.6.872"},
    {"id":"8282dccc-9d63-4234-a216-c8518a7064c9","mac_address":"A2-06-0C-B8-BF-02","ip_address":{"v4":"13.86.10.101","v6":"282c:a375:fcd8:247f:11f2:356b:652b:cffe"},"user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.0 Safari/534.24"},
  ]

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('AccessLogService', {
      getAccessLogEntries: of(expectedEntries)
    })
    
    await TestBed.configureTestingModule({
      declarations: [ 
        AccessLogListComponent,
        AccessLogListItemComponentStub,
      ],
      providers: [
        { provide: AccessLogService, useValue: spy }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AccessLogListComponent);
      fixture.detectChanges();
      component = fixture.componentInstance;
      return fixture.whenStable().then(() => {
        page = new AccessLogEntryListPage();
      });
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render ${expectedEntries.length} rows`, () => {
    expect(page.accessLogEntryRows.length).toBe(expectedEntries.length)
  }) 
});

class AccessLogEntryListPage {
  accessLogEntryRows: HTMLElement[]
  constructor() {
    const rows = fixture.nativeElement.querySelectorAll('app-access-log-list-item')
    this.accessLogEntryRows = Array.from(rows)
  }
}

@Component({ selector: 'app-access-log-list-item', template: ''})
class AccessLogListItemComponentStub { }
