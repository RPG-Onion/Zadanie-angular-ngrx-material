import {TestBed} from '@angular/core/testing';

import {JokeApiService} from './joke-api.service';

describe('JokeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JokeApiService = TestBed.get(JokeApiService);
    expect(service).toBeTruthy();
  });
});
