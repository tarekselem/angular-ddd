import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISearchFilters } from '@shared/models';
import { TariffDto } from '../models';
import { TARIFFS_DATA } from '../__mock__';

@Injectable()
export class ApiTariffsService {
  getAll(): Observable<TariffDto[]> {
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
