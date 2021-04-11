import { TestBed } from '@angular/core/testing';

import { DrugListServiceService } from './drug-list-service.service';

describe('DrugListServiceService', () => {
  let service: DrugListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
