import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HobbyService  {
  url = 'http://localhost:3000'
  constructor(private http:HttpClient) { }
  getHobbies(course_id:string,student_id:string){
    return this.http.get(this.url+`/courses/${course_id}/students/${student_id}/hobbies`)
  }
}
