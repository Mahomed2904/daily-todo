import { TestBed } from '@angular/core/testing';

import { ImageFormatConverterService } from './image-format-converter.service';

describe('ImageFormatConverterService', () => {
  let service: ImageFormatConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageFormatConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
