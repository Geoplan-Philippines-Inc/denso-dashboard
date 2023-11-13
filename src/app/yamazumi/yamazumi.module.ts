import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from '../bootstrap.module';
import { NgChartsModule } from 'ng2-charts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AssociateComponent } from './pages/associate/associate.component';
import { ComparisonComponent } from './pages/comparison/comparison.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@NgModule({
  declarations: [
    AssociateComponent,
    ComparisonComponent
  ],
  exports: [
    AssociateComponent,
    ComparisonComponent
  ],
  imports: [
    CommonModule,
    BootstrapModule,
    NgChartsModule,
    SharedModule,
    FormsModule,
    JsonPipe
  ]
})
export class YamazumiModule { }
