import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  elements: string[] = []
  showList: boolean = true
  showAdd: boolean = true

  addElement() {
    this.elements.push(`Element ${this.elements.length}`)    
  }

  removeElement() {
    this.elements.pop()
  }
  
  toggleShowList() {
    this.showList = !this.showList
  }

  switchElement() {
    this.showAdd = !this.showAdd
  }
}
