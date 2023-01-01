import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './components';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [BrowserModule, PublicRoutingModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
