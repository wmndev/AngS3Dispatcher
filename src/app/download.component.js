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
var http_1 = require("@angular/http");
var dispatcher_service_1 = require("./dispatcher.service");
var DownloadComponent = (function () {
    function DownloadComponent(http, dispatcherService) {
        this.http = http;
        this.dispatcherService = dispatcherService;
    }
    DownloadComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            this.dispatcherService.downloadFromS3(formData).subscribe(function (data) { return console.log('success'); }, function (error) { return console.log(error); });
        }
    };
    return DownloadComponent;
}());
DownloadComponent = __decorate([
    core_1.Component({
        template: "\n  <span class=\"btn btn-info btn-file\">\n    Upload <input type=\"file\" (change)=\"fileChange($event)\" accept=\".txt\">\n</span>",
        styles: ["\n  .btn-file {\n    position: relative;\n    overflow: hidden;\n}\n.btn-file input[type=file] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-width: 100%;\n    min-height: 100%;\n    font-size: 100px;\n    text-align: right;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    outline: none;\n    background: white;\n    cursor: inherit;\n    display: block;\n}"],
        providers: [dispatcher_service_1.DispatcherService]
    }),
    __metadata("design:paramtypes", [http_1.Http,
        dispatcher_service_1.DispatcherService])
], DownloadComponent);
exports.DownloadComponent = DownloadComponent;
//# sourceMappingURL=download.component.js.map