import { TestBed } from '@angular/core/testing';

import { HotTopicService } from './hot-topic.service';

describe('HotTopicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotTopicService = TestBed.get(HotTopicService);
    expect(service).toBeTruthy();
  });
});
