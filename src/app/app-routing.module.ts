import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFormComponent } from './component/admin-form/admin-form.component';
import { VmViewComponent } from './component/vm-view/vm-view.component';


const routes: Routes = [
  {
    path: "", component: VmViewComponent
  },
  {
    path:"admin",component:AdminFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
