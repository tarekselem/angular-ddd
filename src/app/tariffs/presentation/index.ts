import { TariffsComponent } from './tariffs.component';
import { TariffsListComponent, TariffDetailsComponent } from './tariffs-list';
import { TariffsFiltersComponent } from './tariffs-filters';
import { TariffsService } from './tariffs.service';

const COMPONENTS = [
  TariffsComponent,
  TariffsListComponent,
  TariffDetailsComponent,
  TariffsFiltersComponent
];
const PRESENTATION_SERVICES = [TariffsService];

export { TariffsComponent, COMPONENTS, PRESENTATION_SERVICES };
