import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ISearchFilters } from '@shared/models';
import { ApiSportsService } from '@api/services';
import { SportsRepository } from '../domain/repositories';
import { ISportTraining } from '../domain/models';
import { SportsMapper } from './sports.mapper';

@Injectable()
export class ApiSportsRepository extends SportsRepository {
  constructor(private readonly apiService: ApiSportsService) {
    super();
  }

  searchTariffs(
    latitude: number,
    longitude: number
  ): Observable<ISportTraining[]> {
    return this.apiService
      .search(latitude, longitude)
      .pipe(map((data) => SportsMapper.mapTrainingGroupsFromApi(data)));
  }
}
