import { TestBed } from '@angular/core/testing';

import { ConvertService } from './convert.service';

describe('ConvertService', () => {
  let service: ConvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the converted letter A', ()=>{
    expect(service.convert('0')).toBe('A');
    expect(service.convert('26')).toBe('A');
  })  
});
