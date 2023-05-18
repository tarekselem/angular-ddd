import { SportsComponent } from './sports.component';
import { SportsListComponent, SportDetailsComponent } from './sports-list';
import { SportsService } from './sports.service';
import { SportsMapComponent } from './sports-map/sports-map.component';

const COMPONENTS = [
  SportsComponent,
  SportsListComponent,
  SportDetailsComponent,
  SportsMapComponent
];
const PRESENTATION_SERVICES = [SportsService];

export { SportsComponent, COMPONENTS, PRESENTATION_SERVICES };
