import { TestBed, inject } from '@angular/core/testing';

import { UsersTableInactiveService } from './users-table-inactive.service';

describe('UsersTableInactiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersTableInactiveService]
    });
  });

  it('should be created', inject([UsersTableInactiveService], (service: UsersTableInactiveService) => {
    expect(service).toBeTruthy();
  }));
});
