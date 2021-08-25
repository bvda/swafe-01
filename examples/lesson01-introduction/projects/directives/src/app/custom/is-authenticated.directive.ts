import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appIsAuthenticated]'
})
export class IsAuthenticatedDirective implements OnInit, OnDestroy {

  subscription!: Subscription;

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>, 
    private auth: AuthService) { }

    ngOnInit() {
      this.subscription = this.auth.isAuthenticated().subscribe(authenticated => {
        if(authenticated) {
          this.container.createEmbeddedView(this.template)
        } else {
          this.container.clear()
        }
      })
    }

    ngOnDestroy() {
      this.subscription.unsubscribe()
    }
}
