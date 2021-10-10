import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/car.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() car!: Car

  constructor() { }

  ngOnInit(): void {
  }

}
