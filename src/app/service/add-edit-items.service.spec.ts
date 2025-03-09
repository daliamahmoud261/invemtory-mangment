import { TestBed } from '@angular/core/testing';

import { AddEditItemsService } from './add-edit-items.service';

describe('AddEditItemsService', () => {
  let service: AddEditItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEditItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
