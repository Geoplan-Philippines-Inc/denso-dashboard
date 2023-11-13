import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { GroupMasterComponent } from './pages/group-master/group-master.component';
import { BootstrapModule } from '../bootstrap.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PartMasterComponent } from './pages/part-master/part-master.component';


@NgModule({
  declarations: [
    GroupMasterComponent,
    PartMasterComponent
  ],
  exports: [
    GroupMasterComponent,
    PartMasterComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    SharedModule,
    BootstrapModule,
    ReactiveFormsModule
  ],
  providers: [DecimalPipe],
})
export class MaintenanceModule { }
