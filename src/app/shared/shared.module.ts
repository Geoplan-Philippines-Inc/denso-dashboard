import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { DropdownComponent } from './ui/dropdown/dropdown.component';
import { BootstrapModule } from '../bootstrap.module';
import { ButtonComponent } from './ui/button/button.component';



@NgModule({
  declarations: [
    DropdownComponent,
    ButtonComponent,
    ButtonComponent
  ],
  exports: [
    LayoutModule,
    DropdownComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    BootstrapModule
  ]
})
export class SharedModule { }
