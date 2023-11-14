import { DecimalPipe } from '@angular/common';
import { Component, PipeTransform } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, map, startWith } from 'rxjs';
import { PartMasterTableInterface } from '../../model/part-master-table-interface';
import { PartsService } from '../../service/parts.service';
import { PARTMASTERTABLEDATA } from '../../data/part-master-table-data';
import { FormGroup, FormBuilder } from '@angular/forms';

// function search(text: string, pipe: PipeTransform): PartMasterTableInterface[] {
// 	return PARTMASTERTABLEDATA.filter((part) => {
// 		const term = text.toLowerCase();
// 		return (
// 			part.name.toLowerCase().includes(term) ||
// 			part._id.toLowerCase().includes(term) ||
// 			pipe.transform(part.kpi_value).includes(term)
// 		);
// 	});
// }

@Component({
	selector: 'app-part-master',
	templateUrl: './part-master.component.html',
	styleUrls: ['./part-master.component.scss']
})

export class PartMasterComponent {
	// partMasterTable$: Observable<PartMasterTableInterface[]>;
	filter = new FormControl('', { nonNullable: true });

	partMasterForm: any = FormGroup;

	code: number = 3000;
	length: number = NaN;
	code_id: number = NaN;
	selectedForm!: FormGroup;
	selectedZone = []
	selectedZoneIds: any;

	parts: any[] = [];
	newParts: any[] = [];

	errorMessage!: String[]
	constructor(
		pipe: DecimalPipe,
		private modalService: NgbModal,
		private formBuilder: FormBuilder,
		private partsService: PartsService,
		) {
			
		// this.partMasterTable$ = this.filter.valueChanges.pipe(
		// 	startWith(''),
		// 	map((text) => search(text, pipe)),
		// );
		this.getAllParts()
		this.handleSelectedZone()
	}	

	ngOnInit(){
	}

	get selectedParts(): FormArray {
		return this.partMasterForm.get('selectedParts') as FormArray;
	}


	getAllParts () { 
		this.partsService.loadParts().subscribe((res: any) => {
			this.parts = res.data.parts
			this.length = res.length;
			this.code += this.length
			this.handleFormValue()
		})
	}

	handleFormValue(){
		this.partMasterForm = this.formBuilder.group({
			code: this.code,
			name: '',
			kpiValue: 12,
		})
	}

	
	handleSelectedZone() {
			this.selectedForm = this.formBuilder.group({
			selectedZones: this.formBuilder.array([]),
		})
	}
	
	get selectedZones(): FormArray {
		return this.selectedForm.get('selectedZones') as FormArray;
	}
	
	isSelected(zoneId: string): boolean {
		console.log('selected')
		return this.selectedZones.value.includes(zoneId);
	}
	
	onCheckboxChange(event: any, zoneId: string) {
		const selectedZones = this.selectedZones;
	
		if (event?.target.checked) {
			selectedZones.push(this.formBuilder.control(zoneId))
		} else {
			const index = selectedZones.controls.findIndex(x => x.value === zoneId);
			selectedZones.removeAt(index);
		}
	
		console.log('Selected Zones:', this.selectedZones.value);
	}
	
	getSelectedZoneIds() {
		this.selectedZoneIds = this.selectedZones.value;
		console.log('Selected Zone IDs:', this.selectedZoneIds);
	}

	newPart(){
		const formData = this.partMasterForm.value;
		this.addNewPart(formData)
		console.log(formData)
	}

	addAndClose(){
		this.modalService.dismissAll('Cross click');
	}

	clear(){
		this.partMasterForm.reset();
	}

	openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

	addNewPart(data: any){
		this.partsService.postParts(data).subscribe(
			(response) => {
				this.getAllParts()
			},
			(error) => {
				console.log(error)
			}
		)
	}

	deleteId: any;

	deleteZone() {
		this.deleteId = this.selectedZones.value;
		console.log('Selected Zone IDs to delete:', this.deleteId);
	
		this.partsService.deleteParts(this.deleteId).subscribe(
			(res: any) => {
				console.log('Deletion successful:', res);
				this.getAllParts();
				this.selectedZones.clear();
			},
			(error) => {
				console.error('Error during deletion:', error);
			}
		);
	}
}