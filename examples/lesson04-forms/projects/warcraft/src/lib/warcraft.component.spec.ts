import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarcraftComponent } from './warcraft.component';

describe('WarcraftComponent', () => {
  let component: WarcraftComponent;
  let fixture: ComponentFixture<WarcraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarcraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarcraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
