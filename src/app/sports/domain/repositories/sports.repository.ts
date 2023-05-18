import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchFilters } from '@shared/models';
import { ITariff } from '../models';

@Injectable()
export abstract class SportsRepository {
  abstract getAllTariffs(): Observable<ITariff[]>;
  abstract searchTariffs(filters: ISearchFilters): Observable<ITariff[]>;
}
