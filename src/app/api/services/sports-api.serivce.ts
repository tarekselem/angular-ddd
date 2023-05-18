import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISearchFilters } from '@shared/models';
import { TariffDto } from '../models';
import { TARIFFS_DATA } from '../__mock__';

@Injectable()
export class ApiSportsService {
  constructor(@Inject('API_URL') private apiURL: string) {
    apiURL += '/training_groups_listing';
  }

  getAll(): Observable<TariffDto[]> {
    console.log(this.apiURL);
    return of(TARIFFS_DATA);
  }

  searchByFilters(filters: ISearchFilters): Observable<TariffDto[]> {
    return of(this.geFilterdData(filters));
  }

  private geFilterdData(filters: ISearchFilters) {
    return TARIFFS_DATA.filter(
      ({ name, price, downloadSpeed, uploadSpeed, attributes }) =>
        (filters.keyword &&
          (name
            .toLocaleLowerCase()
            .includes(filters.keyword.toLocaleLowerCase()) ||
            attributes.some(
              (attr) =>
                // skip TSC error
                filters.keyword &&
                attr
                  .toLocaleLowerCase()
                  .includes(filters.keyword.toLocaleLowerCase())
            ))) ||
        filters?.price === price ||
        filters?.downloadSpeed === downloadSpeed ||
        filters?.uploadSpeed === uploadSpeed
    );
  }
}
