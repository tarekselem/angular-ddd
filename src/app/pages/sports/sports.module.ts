import { NgModule } from '@angular/core';
import { SportsModule } from '@app/sports';
import { routedComponents } from './sports-routing.module';
import { SportsRoutingModule } from './sports-routing.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [SportsModule, SportsRoutingModule]
})
export class SportsPageModule {}
