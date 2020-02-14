import { Component, SimpleChanges, Input, Output, EventEmitter } from "@angular/core";
import { ImageCropper } from "./imageCropper";


@Component({
  selector: 'image-cropper',  
  templateUrl: './angular-image-cropper.component.html',
})


export class CropperComponent  {

    imageCropperController:any;
    @Input() imageUrl:any
    actionLabels:any
    apiCallback:any
    fitOnInit:any
    centerOnInit:any
    checkCrossOrigin:any
    showControls:any
    api:any;
    target:any;
    options:any;
    @Input() height:any = 0
    @Input() width:any = 0
    @Output() croppedBase64 = new EventEmitter<any>();    
    @Input() config:any    
    @Output() croppedBase64Preview = new EventEmitter<any>();  
  
    ngOnInit(changes: SimpleChanges) {
      this.initCropper()
    }
      
      initCropper(){
            this.target = document.getElementsByTagName('image-cropper')[0];
            this.api = new ImageCropper(this);
      }
  
      // ngDoCheck(changes: SimpleChanges) { 
      //   this.croppedBase64.emit(this.api.options.croppedImage);    
      // }

      manualCropEvent(type){        
        this.api.options.croppedImage = this.api.cropImage(); 
        if(type == 'preview'){
          this.croppedBase64Preview.emit(this.api.options.croppedImage); 
        } else{  
        this.croppedBase64.emit(this.api.options.croppedImage); 
        }
      }

}