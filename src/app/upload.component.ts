import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UploadForm } from './upload-form';
import { DispatcherService } from './dispatcher.service';

import { DataService } from './data.service'

@Component({
    templateUrl: './upload-form.component.html',
    providers: [DispatcherService]
})
export class UploadComponent {

    model = new UploadForm();
    isLoading = false;

    constructor(private dispatcherService: DispatcherService,
        private dataService: DataService,
        private router: Router) { }

    onSubmit(data: UploadForm) {
        this.isLoading = true;
        this.dispatcherService.uploadToS3(data)
            .subscribe(res => {
                console.log(res);
                this.isLoading = false;
                this.dataService.data = JSON.parse(res.text());
                this.navigateToResultPage();
            });
    }

    navigateToResultPage() {
        this.router.navigate(['/result']);
    }
}