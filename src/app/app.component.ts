import { Component } from '@angular/core';
import {SubmissionService} from './submission.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testcase: any = {
    input: "",
    output: "",
    real_output:"",
  }
  constructor(private submitter: SubmissionService){
    this.submitter.connect();
    this.submitter.listen((value)=>{this.listenTo(value)});
  }
  onSubmit([program,language]: [string,string]){
    this.submitter.sendMessage({
      command: "execute",
      program: program.replace(/\r\n/g, "\n"),
      language,
    })
  }
  listenTo(value: any) : void{
    if(value.command == "response"){
      console.log(this);
      this.testcase = value.result;
    }
  }
}
