import { TestBed } from '@angular/core/testing';

import { IsuueService } from './issue.service';

describe('IssueService', () => {
  let service: IsuueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsuueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
