import { NgModule } from '@angular/core';
import { TariffsModule } from '@app/tariffs';
import { routedComponents } from './tariffs-routing.module';
import { TariffsRoutingModule } from './tariffs-routing.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [TariffsModule, TariffsRoutingModule]
})
export class TariffsPageModule {}
