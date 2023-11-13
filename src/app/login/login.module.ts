import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { BootstrapModule } from '../bootstrap.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LoginRoutingModule,
        BootstrapModule
    ]
})
export class LoginModule { }
