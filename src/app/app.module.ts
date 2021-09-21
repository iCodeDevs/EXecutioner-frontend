import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CodeEditorModule } from '@ngstack/code-editor';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { TestcaseComponent } from './testcase/testcase.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    TestcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CodeEditorModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
