import { TestBed } from '@angular/core/testing';

import { ScriptsLoadService } from './scripts-load.service';

describe('ScriptsLoadService', () => {
  let service: ScriptsLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptsLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
