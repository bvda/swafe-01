import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLogDetailsComponent } from './access-log-details.component';

describe('AccessLogDetailsComponent', () => {
  let component: AccessLogDetailsComponent;
  let fixture: ComponentFixture<AccessLogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessLogDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessLogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
