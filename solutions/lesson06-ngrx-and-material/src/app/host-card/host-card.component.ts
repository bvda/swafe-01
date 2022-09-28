import { Component, Input, OnInit } from '@angular/core';
import { Host } from '../hosts.service';

@Component({
  selector: 'app-host-card',
  templateUrl: './host-card.component.html',
  styleUrls: ['./host-card.component.scss']
})
export class HostCardComponent implements OnInit {
  
  @Input() host!: Host

  constructor() { }

  ngOnInit(): void {
  }

}
