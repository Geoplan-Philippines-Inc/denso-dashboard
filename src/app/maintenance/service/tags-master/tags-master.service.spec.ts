import { TestBed } from '@angular/core/testing';

import { TagsMasterService } from './tags-master.service';

describe('TagsMasterService', () => {
  let service: TagsMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagsMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
