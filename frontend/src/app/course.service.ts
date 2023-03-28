import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CourseService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getCourses() {
    return this.http.get(this.url + '/courses');
  }
}
