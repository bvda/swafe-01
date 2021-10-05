import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLogListComponent } from './access-log-list.component';

describe('AccessLogListComponent', () => {
  let component: AccessLogListComponent;
  let fixture: ComponentFixture<AccessLogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessLogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
