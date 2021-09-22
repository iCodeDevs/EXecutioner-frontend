import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-testcase',
  templateUrl: './testcase.component.html',
  styleUrls: ['./testcase.component.css']
})
export class TestcaseComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() model: any
}
