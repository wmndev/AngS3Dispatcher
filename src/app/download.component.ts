import { Component } from '@angular/core';
import { Http, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { DispatcherService } from './dispatcher.service';

@Component({
  template: `
  <span class="btn btn-info btn-file">
    Upload <input type="file" (change)="fileChange($event)" accept=".txt">
</span>`,
  styles: [`
  .btn-file {
    position: relative;
    overflow: hidden;
}
.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
}`],
  providers: [DispatcherService]
})
export class DownloadComponent {

  constructor(private http: Http,
    private dispatcherService: DispatcherService) { }

  fileChange(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);

      this.dispatcherService.downloadFromS3(formData).subscribe(
        data => console.log('success'),
        error => console.log(error)
      )



      //   let headers = new Headers();
      //   headers.append('Content-Type', 'multipart/form-data');
      //   headers.append('Accept', 'application/json');

      //  // let options = new RequestOptions({ headers: headers });
      //   this.http.post(`/endpoint`, formData, options)
      //       .map(res => res.json())
      //       .catch(error => Observable.throw(error))
      //       .subscribe(
      //           data => console.log('success'),
      //           error => console.log(error)
      //       )
    }
  }
}
