import { TestBed, inject } from '@angular/core/testing';

import { TutserviceService } from './tutservice.service';

describe('TutserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutserviceService]
    });
  });

  it('should be created', inject([TutserviceService], (service: TutserviceService) => {
    expect(service).toBeTruthy();
  }));
});
