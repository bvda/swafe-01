import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexItemComponent } from './flex-item.component';

describe('FlexItemComponent', () => {
  let component: FlexItemComponent;
  let fixture: ComponentFixture<FlexItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
