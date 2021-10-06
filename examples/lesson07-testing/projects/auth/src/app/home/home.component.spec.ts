import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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

    beforeEach(() => {
      inputUsername = fixture.nativeElement.querySelector('#username');
      inputPassword = fixture.nativeElement.querySelector('#password');
    })

    it('should update the value of username input field', () => {
      const event = new Event('input')
      inputUsername.value = expectedUsername
      inputUsername.dispatchEvent(event)
  
      expect(fixture.componentInstance.authForm.value.username).toEqual(expectedUsername)
    })
  
    it('should update the value of password input field', () => {
  
      const event = new Event('input')
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

});
