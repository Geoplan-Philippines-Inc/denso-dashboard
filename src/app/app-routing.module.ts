import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociateComponent } from './yamazumi/pages/associate/associate.component';
import { ComparisonComponent } from './yamazumi/pages/comparison/comparison.component';

const routes: Routes = [
    { path: 'yamazumi/associate', component: AssociateComponent },
    { path: 'yamazumi/comparison', component: ComparisonComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
