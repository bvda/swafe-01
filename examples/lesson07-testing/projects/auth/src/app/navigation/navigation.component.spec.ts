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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Routing', () => {
    let routerLinks: RouterLinkDirectiveStub[] = []
    let linkDes

    beforeEach(() => {
      fixture.detectChanges();
      linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
      routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub))
    })
    it('should navigate to selected AccessLogEntry details', () => {
      expect(routerLinks.length).toBe(2)      
    })
    it('should navigate to ""', () => {
      expect(routerLinks[0].params).toBe('')
    })
    it('should navigate to "access-log"', () => {
      expect(routerLinks[1].params).toBe('access-log')
    })
  })

  // it('should not have a message after construction', () => {
  //   component.ngOnInit()
  // })

});
