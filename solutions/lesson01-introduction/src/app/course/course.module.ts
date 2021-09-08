import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';



@NgModule({
  declarations: [
    CourseListItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CourseListItemComponent,
  ]
})
export class CourseModule { }
