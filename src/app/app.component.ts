import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-img-cropper';
  cropperUrl:any;
  cropperUrlFinal:any;

  onChange(element) {
    let self = this;
  //   if (FileReader && files && files.length) {
  //     var fr = new FileReader();
  //     fr.onload = function () {
  //       self.cropperUrl = fr.result;
  //         debugger;
  //     }
  //     fr.readAsDataURL(files[0]);
  // }
    // this.cropperUrl = event.srcElement.files;
    var file = element.target.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    self.cropperUrl = reader.result;
  }
  reader.readAsDataURL(file);

  }

  getBase64($event){
    if($event){
    this.cropperUrlFinal = $event; 
    }
}
}
