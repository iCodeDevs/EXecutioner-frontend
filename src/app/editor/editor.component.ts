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

  @Output() Submitted = new EventEmitter<[string,string]>()

  theme = 'vs-dark';

  languageChoices = [
    ["python3","python"],
    ["C","c"],
  ]
  realLanguage: string = 'C'
  model: CodeModel = {
    language: 'c',
    uri: 'main.json',
    value: '',
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
    this.realLanguage = ev.target.selectedOptions[0].innerText.trim();
  }

  onSubmit(){
    this.Submitted.emit([this.model.value,this.realLanguage]);
  }
}
