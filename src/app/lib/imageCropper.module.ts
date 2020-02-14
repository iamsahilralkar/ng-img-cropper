import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CropperComponent } from './angular-image-cropper.component'

@NgModule({
  declarations: [
    CropperComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CropperComponent
  ],
  entryComponents: [
    CropperComponent
  ]
})
export class customImageCropperModule { }
