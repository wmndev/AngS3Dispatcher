import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './data.service'
import { GraphResultComponent } from './result.graph.component'

@Component({
    template: `<line-chart-demo></line-chart-demo>`
})
export class ResultPageComponent implements OnInit{


    constructor(private dataService: DataService,
        private router: Router) { }

    data: any
 
    ngOnInit(){
        this.data = this.dataService.data;
        console.log('********  ' + this.data);
        //console.log(this.data[0].times);
        //console.log(this.data[0].stats);
    }



}