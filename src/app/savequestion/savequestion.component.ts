import { Component, OnInit } from '@angular/core';
import { QuestionserviceService } from '../questionservice.service';

@Component({
  selector: 'app-savequestion',
  templateUrl: './savequestion.component.html',
  styleUrls: ['./savequestion.component.css']
})
export class SavequestionComponent implements OnInit {

  title = 'Question';

  public questionTitle: string;
  public questionDescription: string;
  public level: string;
  public tags: string;
  public testCases: string;

  public questionInfo = {
    questionTitle: this.questionTitle,
    questionDescription: this.questionDescription,
    level : this.level,
    tags : this.tags,
    testCases : this.testCases
  };

  constructor(public questionservice: QuestionserviceService) { }

  ngOnInit() {
  }

  submit() {
    this.questionservice.saveQuestion(this.questionInfo);
  }

}
