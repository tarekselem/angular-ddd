import { SportsComponent } from './sports.component';
import { TariffsListComponent, TariffDetailsComponent } from './tariffs-list';
import { TariffsFiltersComponent } from './tariffs-filters';
import { SportsService } from './sports.service';

const COMPONENTS = [
  SportsComponent,
  TariffsListComponent,
  TariffDetailsComponent,
  TariffsFiltersComponent
];
const PRESENTATION_SERVICES = [SportsService];

export { SportsComponent, COMPONENTS, PRESENTATION_SERVICES };
