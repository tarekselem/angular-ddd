import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [MatToolbarModule],
  exports: [FooterComponent],
  declarations: [FooterComponent],
  providers: []
})
export class FooterModule {}
