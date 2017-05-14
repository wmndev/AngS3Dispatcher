"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var generate_component_1 = require("./generate.component");
var upload_component_1 = require("./upload.component");
var download_component_1 = require("./download.component");
var start_page_component_1 = require("./start-page.component");
var result_graph_component_1 = require("./result.graph.component");
var ng2_charts_1 = require("ng2-charts");
var result_page_component_1 = require("./result-page.component");
var data_service_1 = require("./data.service");
var appRoutes = [
    { path: '', component: start_page_component_1.StartPageComponent },
    { path: 'generate', component: generate_component_1.GenerateComponent },
    { path: 'download', component: download_component_1.DownloadComponent },
    { path: 'upload', component: upload_component_1.UploadComponent },
    { path: 'result', component: result_page_component_1.ResultPageComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes),
            http_1.HttpModule,
            http_1.JsonpModule,
            ng2_charts_1.ChartsModule
        ],
        providers: [data_service_1.DataService],
        declarations: [
            app_component_1.AppComponent,
            generate_component_1.GenerateComponent,
            download_component_1.DownloadComponent,
            start_page_component_1.StartPageComponent,
            upload_component_1.UploadComponent,
            result_graph_component_1.GraphResultComponent,
            result_page_component_1.ResultPageComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map