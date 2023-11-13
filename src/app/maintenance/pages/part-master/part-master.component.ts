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
		this.handleFormValue()
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
		})
	}

	handleFormValue(){
		this.getAllParts()
		console.log(this.code)
		this.partMasterForm = this.formBuilder.group({
			code: this.code,
			name: '',
			kpiValue: 12,
		})
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

	deletePart(){
		this.partsService.deleteParts(this.deleteId).subscribe();
		this.getAllParts()
	}
}