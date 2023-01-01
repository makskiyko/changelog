import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public_routing.module';

@NgModule({
  imports: [CommonModule, PublicRoutingModule],
  providers: [],
  bootstrap: [],
})
export class PublicModule {}
