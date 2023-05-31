import { TestBed } from '@angular/core/testing';

import { ExampleLibService } from './example-lib.service';

describe('ExampleLibService', () => {
  let service: ExampleLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
