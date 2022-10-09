import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/car.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() car!: Car
  @Output() remove = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  removeClicked() {
    this.remove.emit(this.car.id)
  }

}
