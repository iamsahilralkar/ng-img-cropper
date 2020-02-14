import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { customImageCropperModule } from './lib/imageCropper.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    customImageCropperModule
  ],
  exports: [
    customImageCropperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
