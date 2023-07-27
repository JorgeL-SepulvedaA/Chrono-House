import { Component } from '@angular/core';

// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // constructor(private camera: Camera) {}

  // takePicture() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   };
  
  //   this.camera.getPicture(options).then((imageData) => {
  //     // imageData is a base64 encoded string
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     // Process the captured image as per your requirement
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

}
