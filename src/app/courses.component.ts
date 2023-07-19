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
<!-- <input [value]="email" (keyup.enter)="email = $event.target?.value; onKeyUp()"/> -->
<div (click)="divClick()">
<button (click)="callFunc($event)" [style.backgroundColor]="isActive ? 'black' : 'green'">LogIn</button>
</div>`
})
//[class.active]="isActive"
export class CoursesComponent
{
  email = 'samer@gmail.com';
  title="Authors";  

  onKeyUp()
  {
    console.log(this.email);
  }

  getTitle()
  {
    return this.title;
  }

  callFunc($event: { stopPropagation: () => void; })
  {
    $event.stopPropagation();
    console.log("It is logged in!", $event);
  }

  divClick()
  {
    console.log("div is clicked.");
  }

  courses;

  isActive = false;

  constructor(service:CoursesService)
  {
     this.courses = service.getCourses();
  }
}