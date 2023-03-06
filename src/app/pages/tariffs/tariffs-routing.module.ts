import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TariffsComponent } from '@app/tariffs/presentation';

const routes: Routes = [{ path: '', component: TariffsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TariffsRoutingModule {}

export const routedComponents = [];
