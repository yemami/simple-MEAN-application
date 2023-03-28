import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HobbyService } from '../hobby.service';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  hobbies!:any[];
  constructor(private hobbyService:HobbyService,private route:ActivatedRoute){}
  ngOnInit() {
    const course_id =this.route.snapshot.paramMap.get('course_id') as string
    const student_id =this.route.snapshot.paramMap.get('student_id') as string
    this.hobbyService.getHobbies(course_id,student_id).subscribe((response:any)=>{
      this.hobbies = response.result as any
    })
  }

}
