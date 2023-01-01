import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page_not_found.component';

const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () =>
      import('../modules/projects').then(m => m.ProjectsModule),
  },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('../modules/public').then(m => m.PublicModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
