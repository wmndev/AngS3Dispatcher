import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'

@Component({
    selector: 'line-chart-demo',
    templateUrl: './graph-result.component.html'
})
export class GraphResultComponent implements OnInit {

    // lineChart
    public lineChartData: Array<any>;

    public lineChartLabels: Array<any>;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        let _lineChartData: Array<any> = new Array(this.dataService.data.length);
        for (let i = 0; i < this.dataService.data.length; i++) {
            let lbl = 'Thread ' + i;
            _lineChartData[i] = { data: new Array(this.dataService.data[i].times.length), label: lbl };

            for (let j = 0; j < this.dataService.data[i].times.length; j++) {
                _lineChartData[i].data[j] = this.dataService.data[i].times[j];
            }
        }
        this.lineChartData = _lineChartData;

        this.lineChartLabels = new Array(this.dataService.data[0].times.length);
        for (let x = 0; x < this.dataService.data[0].times.length; x++) {
            this.lineChartLabels[x] = (x+1);
        }
    }

    public lineChartOptions: any = {
        responsive: true
    };

    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
}