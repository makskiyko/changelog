import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects_routing.module';

@NgModule({
  imports: [CommonModule, ProjectsRoutingModule],
  providers: [],
  bootstrap: [],
})
export class ProjectsModule {}
