import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ISearchFilters } from '@shared/models';
import { ApiSportsService } from '@api/services';
import { ITariff } from '../domain/models';
import { SportsRepository } from '../domain/repositories';
import { TariffsMapper } from './sports.mapper';

@Injectable()
export class ApiSportsRepository extends SportsRepository {
  constructor(private readonly apiService: ApiSportsService) {
    super();
  }

  getAllTariffs(): Observable<ITariff[]> {
    return this.apiService
      .getAll()
      .pipe(map((data) => TariffsMapper.mapTariffsResultsFromApi(data)));
  }

  searchTariffs(filters: ISearchFilters): Observable<ITariff[]> {
    return this.apiService
      .searchByFilters(filters)
      .pipe(map((data) => TariffsMapper.mapTariffsResultsFromApi(data)));
  }
}
