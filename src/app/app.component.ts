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
  input: string = ""
  constructor(private submitter: SubmissionService){
    this.submitter.connect();
    this.submitter.listen((value)=>{this.listenTo(value)});
  }
  onSubmit([program,language]: [string,string]){
    this.submitter.sendMessage({
      command: "execute",
      program: program.replace(/\r\n/g, "\n"),
      language,
      input: this.input,
    })
  }
  listenTo(value: any) : void{
    if(value.command == "response"){
      this.testcase = value.result;
    }
  }
}
