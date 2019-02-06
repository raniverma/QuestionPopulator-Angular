import { TestBed } from '@angular/core/testing';

import { QuestionserviceService } from './questionservice.service';

describe('QuestionserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionserviceService = TestBed.get(QuestionserviceService);
    expect(service).toBeTruthy();
  });
});
