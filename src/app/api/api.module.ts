import { NgModule } from '@angular/core';
import { ApiTariffsService, ApiSportsService } from './services';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: 'API_URL',
      useValue: `${environment.apiUrl}/${environment.apiVersion}`
    },
    ApiTariffsService,
    ApiSportsService
  ]
})
export class ApiModule {}
