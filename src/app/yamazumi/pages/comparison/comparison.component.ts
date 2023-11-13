import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})
export class ComparisonComponent {
  isVisible: boolean = false;

  toggleGraph() {
    this.isVisible = true;
  }
  
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
      labels: [ 'Diola Norman', 'Lopez Maria', 'Ovejas Rommel', 'Ovejas Rommel', 'Cayanes Kurt', ],
      datasets: [
        { 
          data: [ 10, 8, 8, 8, 9, ], 
          label: 'Actual Hours',
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgb(54, 162, 235)',
          ],
          borderWidth: 1,
        },
        { 
          data: [ 8, 8, 7.9, 7.9, 8, ], label: 'Standard Hours',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
          ],
          borderWidth: 1,
        }
      ]
  };
}
