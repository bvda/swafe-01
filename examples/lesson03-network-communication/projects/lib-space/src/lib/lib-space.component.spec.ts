import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSpaceComponent } from './lib-space.component';

describe('LibSpaceComponent', () => {
  let component: LibSpaceComponent;
  let fixture: ComponentFixture<LibSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
