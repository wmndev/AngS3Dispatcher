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
var data_service_1 = require("./data.service");
var GraphResultComponent = (function () {
    function GraphResultComponent(dataService) {
        this.dataService = dataService;
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    GraphResultComponent.prototype.ngOnInit = function () {
        var _lineChartData = new Array(this.dataService.data.length);
        for (var i = 0; i < this.dataService.data.length; i++) {
            var lbl = 'Thread ' + i;
            _lineChartData[i] = { data: new Array(this.dataService.data[i].times.length), label: lbl };
            for (var j = 0; j < this.dataService.data[i].times.length; j++) {
                _lineChartData[i].data[j] = this.dataService.data[i].times[j];
            }
        }
        this.lineChartData = _lineChartData;
        this.lineChartLabels = new Array(this.dataService.data[0].times.length);
        for (var x = 0; x < this.dataService.data[0].times.length; x++) {
            this.lineChartLabels[x] = (x + 1);
        }
    };
    return GraphResultComponent;
}());
GraphResultComponent = __decorate([
    core_1.Component({
        selector: 'line-chart-demo',
        templateUrl: './graph-result.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], GraphResultComponent);
exports.GraphResultComponent = GraphResultComponent;
//# sourceMappingURL=result.graph.component.js.map