import { TestBed } from '@angular/core/testing';

import { ViewFaqService } from './view-faq.service';

describe('ViewFaqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewFaqService = TestBed.get(ViewFaqService);
    expect(service).toBeTruthy();
  });
});
