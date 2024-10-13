import { TestBed } from '@angular/core/testing';

import { TaskJsonService } from './task-json.service';

describe('TaskJsonService', () => {
  let service: TaskJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
