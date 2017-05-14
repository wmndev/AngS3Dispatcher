"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var StartPageComponent = (function () {
    function StartPageComponent() {
    }
    return StartPageComponent;
}());
StartPageComponent = __decorate([
    core_1.Component({
        template: "\n  <div class=\"jumbotron\">\n        <h1>AWS S3 Dispatcher tool</h1>\n        <!--<p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>-->\n        <p>\n            <a class=\"btn btn-primary btn-lg\" role=\"button\" routerLink=\"/generate\" routerLinkActive=\"active\">UPLOAD</a>\n            <a class=\"btn btn-primary btn-lg\" role=\"button\" routerLink=\"/download\" routerLinkActive=\"active\">DOWNLOAD</a>\n        </p>\n    </div>"
    })
], StartPageComponent);
exports.StartPageComponent = StartPageComponent;
//# sourceMappingURL=start-page.component.js.map