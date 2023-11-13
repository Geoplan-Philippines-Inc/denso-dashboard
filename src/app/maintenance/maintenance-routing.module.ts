import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupMasterComponent } from './pages/group-master/group-master.component';
import { PartMasterComponent } from './pages/part-master/part-master.component';
import { ProductModelMasterComponent } from './pages/product-model-master/product-model-master.component';
import { ZoneMasterComponent } from './pages/zone-master/zone-master.component';
import { TagMasterComponent } from './pages/tag-master/tag-master.component';
import { UserMasterComponent } from './pages/user-master/user-master.component';

const routes: Routes = [
  { path: 'maintenance/group-master', component: GroupMasterComponent },
  { path: 'maintenance/part-master', component: PartMasterComponent },
  { path: 'maintenance/product-model-master', component: ProductModelMasterComponent },
  { path: 'maintenance/zone-master', component: ZoneMasterComponent },
  { path: 'maintenance/tag-master', component: TagMasterComponent },
  { path: 'maintenance/user-master', component: UserMasterComponent },
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
