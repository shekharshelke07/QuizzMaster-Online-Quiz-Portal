import { Component, Input, OnInit, SimpleChange,Output,EventEmitter } from '@angular/core';
import {ActivatedRoute, Router,RouterModule} from '@angular/router';
import {Observable} from 'rxjs';
import { Test } from '../test';
import {TestQuestion} from '../test-question';
import {TestService} from '../../test.service';
import { TestquestionService } from '../../testquestion.service';
@Component({
  selector: 'app-updateque',
  templateUrl: './updateque.component.html',
  styleUrls: ['./updateque.component.css']
})
export class UpdatequeComponent implements OnInit {
   id:any;
   alert:any=false;
   question=new TestQuestion();  
  constructor(private service:TestService,private route:Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get("id");
    this.service.getQuestionById(this.id).subscribe(
     data=>{
            this.question=data;
     },
     error=>{
       console.log("Question Not Submitted");
     }
    )
  }
  public back()
  {
    this.route.navigate(['/admin']);
  }  
  public onSubmit()
  {
    this.id=this.question.qId;
      this.service.updateQuestionById(this.id,this.question).subscribe(
        data=>
        {
           this.alert=true;
           console.log(data);             
        },
        error=>
        {
            console.log("Error Occurs");
        }
      )
  }
}
