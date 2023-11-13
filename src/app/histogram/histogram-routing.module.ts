import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistogramComponent } from './histogram.component';

const routes: Routes = [
  { path: 'histogram', component: HistogramComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistogramRoutingModule { }
