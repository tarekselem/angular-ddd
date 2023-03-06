import { Provider } from '@angular/core';

import { TariffsRepository } from '../domain/repositories';
import { ApiTariffsRepository } from './tariffs.repository';

export const DATA_PROVIDERS: Provider[] = [
  {
    provide: TariffsRepository,
    useClass: ApiTariffsRepository
  }
];
