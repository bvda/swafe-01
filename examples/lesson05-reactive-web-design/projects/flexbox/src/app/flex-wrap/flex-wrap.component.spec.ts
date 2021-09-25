import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexWrapComponent } from './flex-wrap.component';

describe('FlexWrapComponent', () => {
  let component: FlexWrapComponent;
  let fixture: ComponentFixture<FlexWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
