import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() SubmitText = "Submit"

  @Output() ValueChanged = new EventEmitter<string>()

  theme = 'vs-dark';

  languageChoices = [
    ["python3","python"],
    ["C","c"],
  ]

  model: CodeModel = {
    language: 'c',
    uri: 'main.json',
    value: '#include<stdio.h>',
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: false,
    },
  };

  onLanguageChange(ev: any){
    this.model = {
      ...this.model,
      language: ev.target.value,
    }
  }

  onSubmit(){
    this.ValueChanged.emit(this.model.value);
  }
}
