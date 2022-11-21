import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
})
export class ToolbarModule { }
