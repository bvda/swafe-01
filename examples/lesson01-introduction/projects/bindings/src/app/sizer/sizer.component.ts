import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  size!: number | string;

  @Output()
  sizeChange = new EventEmitter<number>();
  
  increase(): void {
    this.resize(1);
  }

  decrease(): void {
    this.resize(-1);
  }

  resize(delta: number): void {
    this.size = Math.min(40, Math.max(8, +this.size + delta))
    this.sizeChange.emit(this.size)
  }

}
