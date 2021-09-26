import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../profile.service';

@Component({
  selector: 'app-profile-list-item',
  templateUrl: './profile-list-item.component.html',
  styleUrls: ['./profile-list-item.component.scss']
})
export class ProfileListItemComponent implements OnInit {

  @Input() profile!: Profile
  
  constructor() { }

  ngOnInit(): void {
  }

}
