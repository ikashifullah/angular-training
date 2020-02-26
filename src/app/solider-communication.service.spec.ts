import { TestBed } from '@angular/core/testing';

import { SoliderCommunicationService } from './solider-communication.service';

describe('SoliderCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoliderCommunicationService = TestBed.get(SoliderCommunicationService);
    expect(service).toBeTruthy();
  });
});
