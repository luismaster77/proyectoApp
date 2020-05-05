import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProyectoMonitoreoSharedModule } from 'app/shared/shared.module';

import { ConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [ProyectoMonitoreoSharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [ConfigurationComponent]
})
export class ConfigurationModule {}
