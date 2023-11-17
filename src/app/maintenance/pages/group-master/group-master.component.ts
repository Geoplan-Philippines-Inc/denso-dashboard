import { Component, PipeTransform } from '@angular/core';
import { GroupMasterTableInterface } from '../../model/group-master-table-interface';
import { GROUPMASTERTABLEDATA } from '../../data/group-master-table-data'
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupMasterService } from '../../service/group-master/group-master.service';

// function search(text: string, pipe: PipeTransform): GroupMasterTableInterface[] {
// 	return GROUPMASTERTABLEDATA.filter((group) => {
// 		const term = text.toLowerCase();
// 		return (
// 			group.name.toLowerCase().includes(term) ||
// 			pipe.transform(group.id).includes(term) ||
// 			group.zone1.toLowerCase().includes(term) ||
// 			group.zone2.toLowerCase().includes(term) ||
// 			group.zone3.toLowerCase().includes(term) ||
// 			group.zone4.toLowerCase().includes(term) ||
// 			group.zone5.toLowerCase().includes(term)
// 		);
// 	});
// }

@Component({
	selector: 'app-group-master',
	templateUrl: './group-master.component.html',
	styleUrls: ['./group-master.component.scss']
})
export class GroupMasterComponent {
	groups: any[] = []

	// groupMasterTable$: Observable<GroupMasterTableInterface[]>;
	filter = new FormControl('', { nonNullable: true });

	constructor(
		pipe: DecimalPipe,
		private groupMasterService: GroupMasterService,
		private modalService: NgbModal
		) {
		// this.groupMasterTable$ = this.filter.valueChanges.pipe(
		// 	startWith(''),
		// 	map((text) => search(text, pipe)),
		// );

		this.getAllParts()

		// console.log(this.groupMasterTable$)
	}
	
	getAllParts () { 
		this.groupMasterService.loadGroups().subscribe((res: any) => {
			this.groups = res.data.groups
			console.log('clg: groups' + this.groups)
		})
	}

	openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}
	
	addAndClose(){
		
	}
	

	onEdit(groupObj: any){
		this.groups.forEach(element => {
			element.isEdit = false;
		});
		groupObj.isEdit = true

		// console.log(groupObj)
	}

	onSave(groupObj: any){
		this.groupMasterService.updateGroups(groupObj._id, groupObj).subscribe(
			(res: any) => {
				console.log('success')
				groupObj.isEdit = false
			},
			(error) => {
				console.log(error)
			}
		)
	}

	onClose(groupObj: any){
		groupObj.isEdit = false
	}
}