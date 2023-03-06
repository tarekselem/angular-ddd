import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { COMPONENTS, PRESENTATION_SERVICES } from './presentation';
import { DATA_PROVIDERS } from './data';
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule, FlexLayoutModule],
  providers: [...DATA_PROVIDERS, ...PRESENTATION_SERVICES],
  exports: [...COMPONENTS]
})
export class TariffsModule {}
