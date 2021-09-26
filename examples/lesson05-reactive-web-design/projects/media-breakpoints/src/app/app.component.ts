import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  profiles$
  constructor(private profileService: ProfileService) {
    this.profiles$ = this.profileService.getProfiles()
  }
}
