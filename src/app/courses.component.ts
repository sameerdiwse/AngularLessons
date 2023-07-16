import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
selector: 'courses',
template: `<h2>{{"Authors : "+ getTitle()}}
  <ul>
    <li *ngFor = "let course of courses">
        {{ course }}
    </li>
  </ul>
</h2>
<button [style.backgroundColor]="isActive ? 'black' : 'green'">LogIn</button>`
})
//[class.active]="isActive"
export class CoursesComponent
{
  title="Authors";  

  getTitle()
  {
    return this.title;
  }

  courses;

  isActive = true;

  constructor(service:CoursesService)
  {
     this.courses = service.getCourses();
  }
}