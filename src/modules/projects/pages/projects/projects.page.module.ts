import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectsComponent } from './components';
import { ProjectsRoutingModule } from './projects_routing.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsPageModule {}
