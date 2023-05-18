import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { AgmCoreModule } from '@agm/core';

import { COMPONENTS, PRESENTATION_SERVICES } from './presentation';
import { DATA_PROVIDERS } from './data';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBIsQjYQuboWOg_1g1sAmOog54Afqhe-3E',
      libraries: ['places']
    })
  ],
  providers: [...DATA_PROVIDERS, ...PRESENTATION_SERVICES],
  exports: [...COMPONENTS]
})
export class SportsModule {}
