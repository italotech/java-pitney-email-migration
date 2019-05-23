import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  PitneyBowesEmailMigrationApplicationSharedLibsModule,
  PitneyBowesEmailMigrationApplicationSharedCommonModule,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [PitneyBowesEmailMigrationApplicationSharedLibsModule, PitneyBowesEmailMigrationApplicationSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [PitneyBowesEmailMigrationApplicationSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PitneyBowesEmailMigrationApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: PitneyBowesEmailMigrationApplicationSharedModule
    };
  }
}
