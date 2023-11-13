import { Component } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ChartConfiguration } from 'chart.js';

@Component({
	selector: 'app-associate',
	templateUrl: './associate.component.html',
	styleUrls: ['./associate.component.scss']
})
export class AssociateComponent {
	isVisible: boolean = false;
	hoveredDate: NgbDate | null = null;
	navigation = 'select';

	fromDate: NgbDate | null = null;
	toDate: NgbDate | null = null;

	constructor(
	private calendar: NgbCalendar, 
	public formatter: NgbDateParserFormatter
	) {
		this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
	}

	toggleGraph() {
		this.isVisible = true;
	}	

	public barChartLegend = true;
	public barChartPlugins = [];

	public barChartData: ChartConfiguration<'bar'>['data'] = {
		labels: [ '04/30/23 (Mon)', '05/01/23 (Tue)', '05/02/23 (Wed)', '05/03/23 (Thu)', '05/04/23 (Fri)', '05/05/23 (Sat)', '05/06/23 (Sun)', '05/07/23 (Mon)', '05/08/23 (Tue)', '05/09/23 (Wed)' ],
		datasets: [
			{ data: [ 200, 104, 348, 81, 56, 100, 40, 90,203, 501 ], label: 'Actual' },
			{ data: [ 189, 102, 321, 90, 44, 90, 40, 90, 251, 401 ], label: 'Standard' }
		]
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
