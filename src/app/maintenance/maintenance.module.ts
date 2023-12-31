import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { GroupMasterComponent } from './pages/group-master/group-master.component';
import { BootstrapModule } from '../bootstrap.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartMasterComponent } from './pages/part-master/part-master.component';
import { ProductModelMasterComponent } from './pages/product-model-master/product-model-master.component';
import { HttpClientModule } from '@angular/common/http';
import { ZoneMasterComponent } from './pages/zone-master/zone-master.component';
import { UserMasterComponent } from './pages/user-master/user-master.component';
import { TagMasterComponent } from './pages/tag-master/tag-master.component'

@NgModule({
  declarations: [
    GroupMasterComponent,
    PartMasterComponent,
    ProductModelMasterComponent,
    ZoneMasterComponent,
    UserMasterComponent,
    TagMasterComponent
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
