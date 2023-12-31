import { Component, PipeTransform } from '@angular/core';
import { GroupMasterTableInterface } from '../../model/group-master-table-interface';
import { GROUPMASTERTABLEDATA } from '../../data/group-master-table-data'
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

function search(text: string, pipe: PipeTransform): GroupMasterTableInterface[] {
	return GROUPMASTERTABLEDATA.filter((group) => {
		const term = text.toLowerCase();
		return (
			group.name.toLowerCase().includes(term) ||
			pipe.transform(group.id).includes(term) ||
			group.zone1.toLowerCase().includes(term) ||
			group.zone2.toLowerCase().includes(term) ||
			group.zone3.toLowerCase().includes(term) ||
			group.zone4.toLowerCase().includes(term) ||
			group.zone5.toLowerCase().includes(term)
		);
	});
}

@Component({
	selector: 'app-group-master',
	templateUrl: './group-master.component.html',
	styleUrls: ['./group-master.component.scss']
})
export class GroupMasterComponent {
	groupMasterTable$: Observable<GroupMasterTableInterface[]>;
	filter = new FormControl('', { nonNullable: true });

	constructor(
		pipe: DecimalPipe,
		private modalService: NgbModal
		) {
		this.groupMasterTable$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text, pipe)),
		);
	}	

	openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}
	
	addAndClose(){
		
	}
}
