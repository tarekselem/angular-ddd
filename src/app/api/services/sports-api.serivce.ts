import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainingGroupsListDto } from '../models';

@Injectable()
export class ApiSportsService {
  private readonly _apiURL: string;

  constructor(
    @Inject('API_URL') private readonly API_URL: string,
    private readonly httpService: HttpClient
  ) {
    this._apiURL = API_URL + '/training_groups_listing';
  }

  search(
    latitude: number,
    longitude: number
  ): Observable<TrainingGroupsListDto> {
    return this.httpService.get<TrainingGroupsListDto>(
      `${this._apiURL}?&search[latitude]=${latitude}&search[longitude]=${longitude}`
    );
  }
}
