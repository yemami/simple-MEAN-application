import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students!:any[];
  constructor(private studentService:StudentService,private route:ActivatedRoute){}
  ngOnInit(){
    const course_id= this.route.snapshot.paramMap.get('course_id') as string;
    this.studentService.getStudents(course_id).subscribe((response:any)=>{
      this.students=response.result as any;
    })
  }

}
