import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tariffs',
        loadChildren: () =>
          import('./pages/tariffs/tariffs.module').then(
            (m) => m.TariffsPageModule
          )
      },
      {
        path: 'sports',
        loadChildren: () =>
          import('./pages/sports/sports.module').then((m) => m.SportsPageModule)
      },
      { path: '', redirectTo: 'sports', pathMatch: 'full' },
      { path: '**', redirectTo: 'sports' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
