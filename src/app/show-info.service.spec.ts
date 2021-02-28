import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShowInfoService } from './show-info.service';

describe('ShowInfoService', () => {
  let service: ShowInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ShowInfoService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
