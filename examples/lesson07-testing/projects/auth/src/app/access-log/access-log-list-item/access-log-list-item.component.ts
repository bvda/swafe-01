import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccessLogEntry } from '../../access-log.service';

@Component({
  selector: 'app-access-log-list-item',
  templateUrl: './access-log-list-item.component.html',
  styleUrls: ['./access-log-list-item.component.scss']
})
export class AccessLogListItemComponent implements OnInit {

  @Input() entry: AccessLogEntry | null;
  @Output() removeEntry = new EventEmitter<string>()
  
  constructor() { 
    this.entry = null
  }

  ngOnInit(): void {
  }

  remove(id: string | undefined) {
    this.removeEntry.emit(id)
  }

}
