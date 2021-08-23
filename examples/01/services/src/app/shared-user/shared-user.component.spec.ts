import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUserComponent } from './shared-user.component';

describe('SharedUserComponent', () => {
  let component: SharedUserComponent;
  let fixture: ComponentFixture<SharedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
