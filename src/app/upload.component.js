"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var upload_form_1 = require("./upload-form");
var dispatcher_service_1 = require("./dispatcher.service");
var data_service_1 = require("./data.service");
var UploadComponent = (function () {
    function UploadComponent(dispatcherService, dataService, router) {
        this.dispatcherService = dispatcherService;
        this.dataService = dataService;
        this.router = router;
        this.model = new upload_form_1.UploadForm();
        this.isLoading = false;
    }
    UploadComponent.prototype.onSubmit = function (data) {
        var _this = this;
        this.isLoading = true;
        this.dispatcherService.uploadToS3(data)
            .subscribe(function (res) {
            console.log(res);
            _this.isLoading = false;
            _this.dataService.data = JSON.parse(res.text());
            _this.navigateToResultPage();
        });
    };
    UploadComponent.prototype.navigateToResultPage = function () {
        this.router.navigate(['/result']);
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    core_1.Component({
        templateUrl: './upload-form.component.html',
        providers: [dispatcher_service_1.DispatcherService]
    }),
    __metadata("design:paramtypes", [dispatcher_service_1.DispatcherService,
        data_service_1.DataService,
        router_1.Router])
], UploadComponent);
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=upload.component.js.map