import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ISearchFilters } from '@shared/models';
import { ApiTariffsService } from '@api/services';
import { ITariff } from '../domain/models';
import { TariffsRepository } from '../domain/repositories';
import { TariffsMapper } from './tariffs.mapper';

@Injectable()
export class ApiTariffsRepository extends TariffsRepository {
  constructor(private readonly apiService: ApiTariffsService) {
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
