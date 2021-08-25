import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
