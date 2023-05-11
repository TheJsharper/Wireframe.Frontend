import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWireframeResolver } from './resolvers/app.wireframes.resolver';

const routes: Routes = [
  {
    path: 'md',
    loadChildren: () => import('./micro-apps/material-designs/app.md.module').then(m => m.AppMdModule),

  },
  {
    path: 'wireframes', loadChildren: () => import('./micro-apps/wireframes/app.wireframes.module').then(m => m.AppWireframesModule),
    resolve: { hero: AppWireframeResolver },

  },{ path:'' , redirectTo:'wireframes', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
