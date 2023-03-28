import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { HobbyComponent } from './hobby/hobby.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentComponent,
    HobbyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: CourseComponent,
        title: 'course component',
      },
      {
        path: 'students/:course_id',
        component: StudentComponent,
        title: 'student component',
      },
      {
        path: 'students/:course_id/hobbies/:student_id',
        component: HobbyComponent,
        title: 'hobby component',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
