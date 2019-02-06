import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionserviceService {

  public questionPopulatorApidUrl = 'http://localhost:8090/api/v1/';

  constructor(private _http: HttpClient) {
    console.log('http srvice got called');
  }

  public saveQuestion(questionObj): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let savedQuestionObj = this._http.post(this.questionPopulatorApidUrl + 'question', questionObj);
    console.log(savedQuestionObj);
    return savedQuestionObj;
  }
}
