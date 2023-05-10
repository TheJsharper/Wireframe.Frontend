import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'md', loadChildren: ()=> import('./micro-apps/material-designs/app.md.module').then(m => m.AppMdModule)},
  {path:'wireframes', loadChildren: ()=> import('./micro-apps/wireframes/app.wireframes.module').then(m=> m.AppWireframesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
