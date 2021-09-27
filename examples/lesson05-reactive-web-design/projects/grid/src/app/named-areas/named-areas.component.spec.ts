import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedAreasComponent } from './named-areas.component';

describe('NamedAreasComponent', () => {
  let component: NamedAreasComponent;
  let fixture: ComponentFixture<NamedAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
