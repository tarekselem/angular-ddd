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
      { path: '', redirectTo: 'tariffs', pathMatch: 'full' },
      { path: '**', redirectTo: 'tariffs' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
