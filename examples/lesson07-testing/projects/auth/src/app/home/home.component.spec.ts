import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Input fields', () => {
    const expectedUsername = 'username@example.com'
    const expectedPassword = 'correct-horse-stable-battery'
    let inputUsername: HTMLInputElement
    let inputPassword: HTMLInputElement
    const event = new Event('input')

    beforeEach(() => {
      inputUsername = fixture.nativeElement.querySelector('#username');
      inputPassword = fixture.nativeElement.querySelector('#password');
    })

    it('should update the value in username input field', () => {
      inputUsername.value = expectedUsername
      inputUsername.dispatchEvent(event)
  
      expect(fixture.componentInstance.authForm.value.username).toEqual(expectedUsername)
    })
  
    it('should update the value in password input field', () => {
      inputPassword.value = expectedPassword
      inputPassword.dispatchEvent(event)

      expect(fixture.componentInstance.authForm.value.password).toEqual(expectedPassword)
    })
  
    it('should update the value in username control', () => {
      (component.authForm.get('username') as FormControl)?.setValue(expectedUsername)
      expect(inputUsername.value).toBe(expectedUsername)
    })
    
    it('should update the value in password control', () => {
      (component.authForm.get('password') as FormControl)?.setValue(expectedPassword)
      expect(inputPassword.value).toBe(expectedPassword)
    })
  })

  describe('Submit', () => {
    it('should called onSubmit when form is submitted', () => {
      let de = fixture.debugElement.query(By.css('#authForm'))
      spyOn(component, 'onSubmit'); 
      de.triggerEventHandler('submit', {})
      expect(component.onSubmit).toHaveBeenCalled()
    })
  })
});
