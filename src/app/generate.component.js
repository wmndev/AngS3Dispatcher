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
var generate_form_1 = require("./generate-form");
var dispatcher_service_1 = require("./dispatcher.service");
var GenerateComponent = (function () {
    function GenerateComponent(dispatcherService, router) {
        this.dispatcherService = dispatcherService;
        this.router = router;
        this.model = new generate_form_1.GenerateForm();
        this.isLoading = false;
    }
    GenerateComponent.prototype.navigateToUpload = function () {
        this.router.navigate(['/upload']);
    };
    //data: String;
    GenerateComponent.prototype.onSubmit = function (data) {
        var _this = this;
        // this.data = JSON.stringify(data, null, 2);
        console.log(data);
        this.isLoading = true;
        this.dispatcherService.generateFiles(data)
            .subscribe(function (res) {
            _this.isLoading = false;
            _this.navigateToUpload();
        });
    };
    return GenerateComponent;
}());
GenerateComponent = __decorate([
    core_1.Component({
        selector: 'upload-form',
        templateUrl: './generate-form.component.html',
        providers: [dispatcher_service_1.DispatcherService]
    }),
    __metadata("design:paramtypes", [dispatcher_service_1.DispatcherService,
        router_1.Router])
], GenerateComponent);
exports.GenerateComponent = GenerateComponent;
//# sourceMappingURL=generate.component.js.map