import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostCardComponent } from './host-card.component';

describe('HostCardComponent', () => {
  let component: HostCardComponent;
  let fixture: ComponentFixture<HostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
