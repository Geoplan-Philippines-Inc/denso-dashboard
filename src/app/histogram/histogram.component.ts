import { Component, inject } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent {
  isVisible: boolean = false;
	calendar = inject(NgbCalendar);
	formatter = inject(NgbDateParserFormatter);

	hoveredDate: NgbDate | null = null;
	fromDate: NgbDate | null = this.calendar.getToday();
	toDate: NgbDate | null = this.calendar.getNext(this.calendar.getToday(), 'd', 10);

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

	onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

  	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

	validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
		const parsed = this.formatter.parse(input);
		return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	}
}
