import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses!:any[];
  constructor(private courseService:CourseService){}
  ngOnInit(){
    this.courseService.getCourses().subscribe((response:any)=>{
      this.courses=response.result as any;
    })
  }


}
