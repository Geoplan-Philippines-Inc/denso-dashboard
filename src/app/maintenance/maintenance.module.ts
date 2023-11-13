import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { GroupMasterComponent } from './pages/group-master/group-master.component';
import { BootstrapModule } from '../bootstrap.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartMasterComponent } from './pages/part-master/part-master.component';
import { ProductModelMasterComponent } from './pages/product-model-master/product-model-master.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    GroupMasterComponent,
    PartMasterComponent,
    ProductModelMasterComponent
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
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DecimalPipe],
})
export class MaintenanceModule { }
