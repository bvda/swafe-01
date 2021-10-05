import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLogListItemComponent } from './access-log-list-item.component';

describe('AccessLogListItemComponent', () => {
  let component: AccessLogListItemComponent;
  let fixture: ComponentFixture<AccessLogListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessLogListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessLogListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
