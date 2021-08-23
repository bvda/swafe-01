import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { ROLES_TOKEN } from '../app.config';

@Component({
  selector: 'app-role-selector',
  templateUrl: './role-selector.component.html',
  styleUrls: ['./role-selector.component.scss']
})
export class RoleSelectorComponent implements OnInit {

  @Input()
  value: string | null = ''

  @Output()
  selected = new EventEmitter<string>()

  selection:string = this.rolesArray[0];

  constructor(@Inject(ROLES_TOKEN) private rolesArray: string[]) { 
  }
  
  ngOnInit() {
    // this.onSelected(this.value)
  }

  onChange(event: any) {
    console.log(event.target.value)
    this.selected.emit(event.target.value)
  }

  get roles(): string[] { return this.rolesArray}

}
