import { TestBed, inject } from '@angular/core/testing';

import { ManagementUnitsService } from './management-units.service';

describe('ManagementUnitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagementUnitsService]
    });
  });

  it('should be created', inject([ManagementUnitsService], (service: ManagementUnitsService) => {
    expect(service).toBeTruthy();
  }));
});
