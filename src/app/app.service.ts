import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  readonly backendURL = environment.backendURL;
  constructor(private http: HttpClient) {}

  getTraining(id:string){
    //Not Necessary 
  }

  call(request){
    
  }

trainWebsites(url:string){

}

  trainFiles(files: File[]): void {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    this.http.post(`${this.backendURL}/files/upload`, formData).subscribe(
      (response) => {
        // Handle successful response
        console.log('Files uploaded successfully:', response);
      },
      (error) => {
        // Handle error
        console.error('Error uploading files:', error);
      }
    );
  }
}
