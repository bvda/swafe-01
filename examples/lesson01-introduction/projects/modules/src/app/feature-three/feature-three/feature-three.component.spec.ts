import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureThreeComponent } from './feature-three.component';

describe('FeatureThreeComponent', () => {
  let component: FeatureThreeComponent;
  let fixture: ComponentFixture<FeatureThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
