import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent {
  isVisible: boolean = false;

  toggleGraph() {
    this.isVisible = true;
  }

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['-450', '451-500', '501-550', '551-600', '601-650', '651-700', '701-750', '751-800', '801+'],
    datasets: [{
      data: [2, 3, 4, 7, 8, 7, 1, 1, 1],
      label: 'Actual Duration',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1,
      barPercentage: 1,
      categoryPercentage: 1, 
    }]
  };
}
