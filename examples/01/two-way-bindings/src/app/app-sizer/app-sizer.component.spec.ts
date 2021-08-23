import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSizerComponent } from './app-sizer.component';

describe('AppSizerComponent', () => {
  let component: AppSizerComponent;
  let fixture: ComponentFixture<AppSizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
