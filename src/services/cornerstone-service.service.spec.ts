import { TestBed } from '@angular/core/testing';

import { CornerstoneServiceService } from './cornerstone-service.service';

describe('CornerstoneServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CornerstoneServiceService = TestBed.get(CornerstoneServiceService);
    expect(service).toBeTruthy();
  });
});
