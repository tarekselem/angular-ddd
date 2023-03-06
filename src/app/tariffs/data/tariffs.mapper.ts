import { TariffDto } from '@api/models';
import { ITariff } from '../domain/models';

export class TariffsMapper {
  static mapTariffsResultsFromApi(source: TariffDto[]): ITariff[] {
    // add custom mappings
    return source;
  }
}
