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
import { TagsMasterService } from '../../service/tags-master/tags-master.service';
import { UserMasterService } from '../../service/user-master/user-master.service';

@Component({
  selector: 'app-tag-master',
  templateUrl: './tag-master.component.html',
  styleUrls: ['./tag-master.component.scss']
})
export class TagMasterComponent {
  // partMasterTable$: Observable<PartMasterTableInterface[]>;
  filter = new FormControl('', { nonNullable: true });

  tagsMasterForm: any = FormGroup;
  selectedForm!: FormGroup;
  selectedZone = []

  code: number = 3000;
  length: number = NaN;
  code_id: number = NaN;

  tags: any[] = [];
  users: any[] = [];

  newParts: any[] = [];

  selectedZoneIds: any;

  errorMessage!: String[]
  constructor(
    pipe: DecimalPipe,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private userService: UserMasterService,
    private tagsService: TagsMasterService,
  ) {
    // this.partMasterTable$ = this.filter.valueChanges.pipe(
    // 	startWith(''),
    // 	map((text) => search(text, pipe)),
    // );
    this.handleFormValue()
    this.handleSelectedZone()
  }

  ngOnInit() {
    this.getAllTags()
    this.getAllUser()
  }

  ngAfterViewInit(): void {
  }

  getAllTags() {
    this.tagsService.loadParts().subscribe((res: any) => {
      this.tags = res.data.tags
      this.length = res.length;
      this.code += this.length

      this.handleFormValue()
    })
  }

  getAllUser() {
    this.userService.loadParts().subscribe((res: any) => {
      this.users = res.data.users
    })
  }

  handleFormValue() {
    this.tagsMasterForm = this.formBuilder.group({
      code: this.code,
      serial: '',
      assignedUser: '',
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
    const formData = this.tagsMasterForm.value;
    this.addNewPart(formData)
    console.log(formData)
  }

  addAndClose() {
    this.modalService.dismissAll('Cross click');
  }

  clear() {
    this.tagsMasterForm.reset();
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  addNewPart(data: any) {
    this.tagsService.postTags(data).subscribe(
      (response) => {
        this.getAllTags()
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

    this.tagsService.deleteTags(this.deleteId).subscribe(
      (res: any) => {
        console.log('Deletion successful:', res);
        this.getAllTags();
        this.selectedZones.clear();
      },
      (error) => {
        console.error('Error during deletion:', error);
      }
    );
  }
}
