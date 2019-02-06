import { Component, OnInit } from '@angular/core';
import { QuestionserviceService } from '../questionservice.service';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-savequestion',
  templateUrl: './savequestion.component.html',
  styleUrls: ['./savequestion.component.css']
})
export class SavequestionComponent implements OnInit {

  questionForm: FormGroup;


  title = 'Question';

  levels = ['-----Select Difficulty------', 'Beginner', 'Intermediate',
            'Advance', 'Expert'];


  constructor(public questionservice: QuestionserviceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      questionName: [''],
      questionDescription: [''],
      difficulty: [''],
      tags: [''],
      gitUrl: ['']
    });
  }

  submit(): any {
    console.log('questionForm: ', this.questionForm.value);
    this.questionservice.saveQuestion( this.questionForm.value).subscribe(
      data => {
        console.log('data is ', data);
    });
  }

}
