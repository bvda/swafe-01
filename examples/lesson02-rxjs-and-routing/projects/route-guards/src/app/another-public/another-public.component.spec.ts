import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherPublicComponent } from './another-public.component';

describe('AnotherPublicComponent', () => {
  let component: AnotherPublicComponent;
  let fixture: ComponentFixture<AnotherPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
