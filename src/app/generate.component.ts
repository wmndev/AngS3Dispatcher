import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GenerateForm } from './generate-form';
import { DispatcherService } from './dispatcher.service';

@Component({
    selector: 'upload-form',
    templateUrl: './generate-form.component.html',
    providers: [DispatcherService]
})
export class GenerateComponent {
    model = new GenerateForm();
    isLoading = false;
    constructor(private dispatcherService: DispatcherService,
        private router: Router) { }

    navigateToUpload() {
        this.router.navigate(['/upload']);
    }

    //data: String;

    onSubmit(data:GenerateForm) {
       // this.data = JSON.stringify(data, null, 2);
        console.log(data);

        this.isLoading = true;
        this.dispatcherService.generateFiles(data)
            .subscribe(res => {
                this.isLoading = false;
                this.navigateToUpload();
            });
    }
}