import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-testcase',
  templateUrl: './testcase.component.html',
  styleUrls: ['./testcase.component.css']
})
export class TestcaseComponent implements OnInit {

  constructor() {
    console.log("testcase:"); 
    console.log(this.model)
  }

  ngOnInit(): void {
  }

  @Input() model: any
}
