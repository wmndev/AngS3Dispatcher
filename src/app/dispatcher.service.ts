import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GenerateForm } from './generate-form';
import { UploadForm } from './upload-form';

@Injectable()
export class DispatcherService {

    baseUrl : String;
    constructor(private httpClient: Http) { 
        console.log('href : ' + window.location.href);
        this.baseUrl = window.location.origin.replace(window.location.port, '8080');
    }

    generateFiles(data: GenerateForm): Observable<Response> {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');

        return this.httpClient.post(this.baseUrl + '/files',
            data, headers)
            .map((res: Response) => {
                return res;
            });
    }

    uploadToS3(data: UploadForm): Observable<Response> {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');

        return this.httpClient.post(this.baseUrl  + '/upload',
            data, headers)
            .map((res: Response) => {
                return res;
            });
    }

    downloadFromS3(data: FormData): Observable<Response> {
        var headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return this.httpClient.post(this.baseUrl  + '/download',
            data, headers)
            .map((res: Response) => {
                return res;
            });

    }
}