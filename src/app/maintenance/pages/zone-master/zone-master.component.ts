import { DecimalPipe } from '@angular/common';
import { Component, PipeTransform, ViewChild, AfterViewInit } from '@angular/core';
import { Form, FormArray, FormControl, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, map, startWith } from 'rxjs';
import { PartMasterTableInterface } from '../../model/part-master-table-interface';
import { PartsService } from '../../service/parts.service';
import { PARTMASTERTABLEDATA } from '../../data/part-master-table-data';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ZoneMasterService } from '../../service/zone-master/zone-master.service';

@Component({
  selector: 'app-zone-master',
  templateUrl: './zone-master.component.html',
  styleUrls: ['./zone-master.component.scss']
})
export class ZoneMasterComponent {
  // partMasterTable$: Observable<PartMasterTableInterface[]>;
  filter = new FormControl('', { nonNullable: true });

  zoneMasterForm: any = FormGroup;
  selectedForm!: FormGroup;
  selectedZone = []
  isLoading: boolean = true;

  code: number = 3000;
  length: number = NaN;
  code_id: number = NaN;

  zone: any[] = [];
  parts: any[] = [];

  newParts: any[] = [];

  selectedZoneIds: any;

  errorMessage!: String[]
  constructor(
    pipe: DecimalPipe,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private zoneService: ZoneMasterService,
    private partsService: PartsService,
  ) {
    // this.partMasterTable$ = this.filter.valueChanges.pipe(
    // 	startWith(''),
    // 	map((text) => search(text, pipe)),
    // );
    this.getAllZone()
    this.handleSelectedZone()
  }

  ngOnInit() {
    this.getAllParts()
  }

  ngAfterViewInit(): void {
  }

  getAllZone() {
    this.zoneService.loadParts().subscribe((res: any) => {
      this.zone = res.data.zone
      this.length = res.length;
      this.code += this.length
      
      this.handleFormValue()
    })
  }

  getAllParts() {
    this.partsService.loadParts().subscribe(
      (res: any) => {
        this.parts = res.data.parts
        this.isLoading = false;
      },
      (error: any) => {
        this.isLoading = true;
      }
    )
  }

  handleFormValue() {
    this.zoneMasterForm = this.formBuilder.group({
      code: this.code,
      name: '',
      partCodeAndName: '',
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

  newPart() {
    const formData = this.zoneMasterForm.value;
    this.addNewPart(formData)
    console.log(formData)
  }

  addAndClose() {
    this.modalService.dismissAll('Cross click');
  }

  clear() {
    this.zoneMasterForm.reset();
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  addNewPart(data: any) {
    this.zoneService.postParts(data).subscribe(
      (response) => {
        this.getAllZone()
      },
      (error) => {
        console.log(error)
      }
    )
  }

  headsUpMessage: String = '';
  deleteId: any;
  confirm: any = false;

  deleteZone(headsUp: any) {
    this.modalService.open(headsUp, { size: 'sm' });
    this.deleteId = this.selectedZones.value;

    if(this.confirm){
    }else if(this.deleteId.length == 0){
      this.headsUpMessage = "No selected items" 
    }else{
      this.headsUpMessage = "Are you sure you want to delete this part!" 
    }
  }

  confirmDelete(){
    this.deleteId = this.selectedZones.value;

    this.zoneService.deleteParts(this.deleteId).subscribe(
      (res: any) => {
        console.log('Deletion successful:', res);
        this.getAllZone();
        this.selectedZones.clear();
        this.modalService.dismissAll('Cross click');
      },
      (error) => {
        console.error('Error during deletion:', error);
      }
    );
    console.log('deleted na?')
  }

  onEdit(groupObj: any){
		this.zone.forEach(element => {
			element.isEdit = false;
		});
		groupObj.isEdit = true
		// console.log(groupObj)
	}

	onSave(groupObj: any){
		this.zoneService.updateZone(groupObj._id, groupObj).subscribe(
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
