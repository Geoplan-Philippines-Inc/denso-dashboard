import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistogramRoutingModule } from './histogram-routing.module';
import { HistogramComponent } from './histogram.component';
import { NgChartsModule } from 'ng2-charts';
import { NgbDatepicker, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { BootstrapModule } from '../bootstrap.module';


@NgModule({
  declarations: [
    HistogramComponent
  ],
  exports: [
    HistogramComponent
  ],
  imports: [
    CommonModule,
    HistogramRoutingModule,
    NgChartsModule,
    SharedModule,
    BootstrapModule
  ]
})
export class HistogramModule { }
