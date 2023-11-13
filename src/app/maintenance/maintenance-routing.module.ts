import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupMasterComponent } from './pages/group-master/group-master.component';
import { PartMasterComponent } from './pages/part-master/part-master.component';
import { ProductModelMasterComponent } from './pages/product-model-master/product-model-master.component';

const routes: Routes = [
  { path: 'maintenance/group-master', component: GroupMasterComponent },
  { path: 'maintenance/part-master', component: PartMasterComponent },
  { path: 'maintenance/product-model-master', component: ProductModelMasterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
