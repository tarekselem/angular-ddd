import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsComponent } from '@app/sports/presentation';

const routes: Routes = [{ path: '', component: SportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule {}

export const routedComponents = [];
