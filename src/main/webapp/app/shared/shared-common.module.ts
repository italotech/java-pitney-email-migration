import { NgModule } from '@angular/core';

import {
  PitneyBowesEmailMigrationApplicationSharedLibsModule,
  FindLanguageFromKeyPipe,
  JhiAlertComponent,
  JhiAlertErrorComponent
} from './';

@NgModule({
  imports: [PitneyBowesEmailMigrationApplicationSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent],
  exports: [PitneyBowesEmailMigrationApplicationSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PitneyBowesEmailMigrationApplicationSharedCommonModule {}
