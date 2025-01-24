/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ControlerService } from './controler.service';

describe('Service: Controler', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlerService]
    });
  });

  it('should ...', inject([ControlerService], (service: ControlerService) => {
    expect(service).toBeTruthy();
  }));
});
