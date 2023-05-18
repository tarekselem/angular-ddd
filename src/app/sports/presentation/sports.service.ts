import { Injectable } from '@angular/core';
import { SportsRepository } from '../domain/repositories';

@Injectable()
export class SportsService {
  constructor(private readonly dataRepository: SportsRepository) {}

  //TODO: execute search filters
}
