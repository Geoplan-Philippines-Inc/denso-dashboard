import { Component } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    public barChartLegend = true;
    public barChartPlugins = [];

    public barChartData: ChartConfiguration<'bar'>['data'] = {
        labels: [ '04/30/23', '05/01/23', '05/02/23', '05/03/23', '05/04/23', '05/05/23', '05/06/23', '05/07/23', '05/08/23', '05/09/23' ],
        datasets: [{ 
            data: [ 200, 59, 160, 81, 56, 100, 40, 90,1000, 1200 ], 
            label: 'Series A', 
        }]
    };
}