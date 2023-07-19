import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AngularCourseComponent } from './angular-course/angular-course.component';
import { CoursesService } from './courses.service';
import { DatesComponent } from './dates/dates.component';
import { SummaryPipe } from './dates/summary.pipe';

@NgModule({
  declarations: [
    AppComponent, AngularCourseComponent, CoursesComponent, DatesComponent, SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
