import { Component, OnInit } from '@angular/core';
import { QuestionserviceService } from '../questionservice.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-savequestion',
  templateUrl: './savequestion.component.html',
  styleUrls: ['./savequestion.component.css']
})
export class SavequestionComponent implements OnInit {

  questionForm: FormGroup;


  title = 'Question';
  submitted = false;

  levels: any  = ['-----Select Difficulty------', 'Beginner', 'Intermediate',
            'Advance', 'Expert'];

  get f() {
     return this.questionForm.controls;
  }


  constructor(public questionservice: QuestionserviceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      questionTitle: ['', Validators.required],
      questionDescription: ['', Validators.required],
      inputFormat: ['', Validators.required],
      outputFormat: ['', Validators.required],
      difficulty: ['', Validators.required],
      tags: ['', Validators.required],
      gitUrl: ['', Validators.required]
    });
  }

  submit(): any {
    this.submitted = true;
   // console.log('questionForm: ', this.questionForm.value);
    this.questionservice.saveQuestion( this.questionForm.value).subscribe(
      data => {
        console.log('data is ', data);
    });
  }

}
