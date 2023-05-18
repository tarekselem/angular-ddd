import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISportTraining } from '../models';

@Injectable()
export abstract class SportsRepository {
  abstract searchTariffs(
    latitude: number,
    longitude: number
  ): Observable<ISportTraining[]>;
}
