import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        NavigationComponent,
        RouterLinkDirectiveStub,
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })

  describe('#template', () => {
    it('should have title "Home"', () => {
      const expectedTitle = 'Home'
      expect(fixture.nativeElement.querySelector('#home').textContent).toBe(expectedTitle)
    })
    
    it('should have title "Access Log"', () => {
      const expectedTitle = 'Access Log'
      expect(fixture.nativeElement.querySelector('#access-log').textContent).toBe(expectedTitle)
    })
  })

  describe('#routing', () => {
    let stubs: RouterLinkDirectiveStub[] = []
    let debugElements: DebugElement[] = []

    beforeEach(() => {
      fixture.detectChanges();
      debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
      stubs = debugElements.map(element => element.injector.get(RouterLinkDirectiveStub))
    })

    it('should have links to all pages', () => {
      expect(stubs.length).toBe(2)      
    })

    it('should have "" for home' , () => {
      expect(stubs[0].params).toBe('')
    })

    it('should have "access-log" for access-log', () => {
      expect(stubs[1].params).toBe('access-log')
    })

    it('can click home in template', () => {
      const expectedPath = ''
      const debugElement = debugElements[0]
      const routerLinkStub = stubs[0]
      expect(routerLinkStub.navigatedTo).toBe(null)
      debugElement.triggerEventHandler('click', expectedPath)
      expect(routerLinkStub.navigatedTo).toBe(expectedPath)  
    })

    it('can click home in template', () => {
      const expectedPath = 'access-log'
      const debugElement = debugElements[1]
      const routerLinkStub = stubs[1]
      expect(routerLinkStub.navigatedTo).toBe(null)
      debugElement.triggerEventHandler('click', expectedPath)
      expect(routerLinkStub.navigatedTo).toBe(expectedPath)  
    })
  })
});
