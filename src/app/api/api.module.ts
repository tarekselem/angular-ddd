import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiTariffsService, ApiSportsService } from './services';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
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
