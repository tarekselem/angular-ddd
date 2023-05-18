import { Provider } from '@angular/core';

import { SportsRepository } from '../domain/repositories';
import { ApiSportsRepository } from './sports.repository';

export const DATA_PROVIDERS: Provider[] = [
  {
    provide: SportsRepository,
    useClass: ApiSportsRepository
  }
];
