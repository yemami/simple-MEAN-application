import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url='http://localhost:3000'
  constructor(private http:HttpClient) { }
  getStudents(course_id:string){
    return this.http.get(this.url+`/courses/${course_id}/students`)
  }
}
