import { NgModule } from '@angular/core';
import { NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [],
    exports: [
        NgbDropdownModule,
        NgbTypeaheadModule,
        NgbModalModule,
        NgbDatepickerModule
    ],
})
export class BootstrapModule {}
