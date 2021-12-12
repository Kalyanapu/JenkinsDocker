import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule} from'@angular/material/button'
import{MatIconModule} from'@angular/material/icon'



@NgModule({
  declarations: [
    AppComponent,
    QuizComponent
  ],
  imports: [
   
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
