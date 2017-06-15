import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'line-chart-demo',
    templateUrl: './graph-result.component.html'
})
export class GraphResultComponent implements OnInit {

    // lineChart
    public barChartData: Array<any>;

    public barChartLabels: Array<any>;

    constructor(private dataService: DataService,
    private router: Router) { }

    navigateToHome(){
        this.router.navigate(['/']);
    }

    ngOnInit() {
        let _barChartData: Array<any> = new Array(this.dataService.data.length);
        for (let i = 0; i < this.dataService.data.length; i++) {
            let lbl = 'Thread ' + i;
            _barChartData[i] = { data: new Array(this.dataService.data[i].times.length), label: lbl };

            for (let j = 0; j < this.dataService.data[i].times.length; j++) {
                _barChartData[i].data[j] = this.dataService.data[i].times[j];
            }
        }
        this.barChartData = _barChartData;

        this.barChartLabels = new Array(this.dataService.data[0].times.length);
        for (let x = 0; x < this.dataService.data[0].times.length; x++) {
            this.barChartLabels[x] = (x+1);
        }
    }

    public barChartOptions: any = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    };

    public barChartLegend: boolean = true;
    public barChartType: string = 'bar';
}