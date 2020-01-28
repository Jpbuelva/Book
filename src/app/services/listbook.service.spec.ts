import { TestBed } from '@angular/core/testing';

import { ListbookService } from './listbook.service';

describe('ListbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListbookService = TestBed.get(ListbookService);
    expect(service).toBeTruthy();
  });
});
