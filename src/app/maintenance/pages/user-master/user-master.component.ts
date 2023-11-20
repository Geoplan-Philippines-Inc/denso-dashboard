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
import { GroupMasterService } from '../../service/group-master/group-master.service';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss']
})
export class UserMasterComponent {
// partMasterTable$: Observable<PartMasterTableInterface[]>;
  filter = new FormControl('', { nonNullable: true });

  zoneMasterForm: any = FormGroup;
  selectedForm!: FormGroup;
  selectedZone = []
  isLoading: boolean = true;

  code: number = 1000;
  length: number = NaN;
  code_id: number = NaN;

  users: any[] = [];
  groups: any[] = [];

  newParts: any[] = [];

  selectedZoneIds: any;

  errorMessage!: String[]
  constructor(
    pipe: DecimalPipe,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private groupsService: GroupMasterService,
    private usersService: UserMasterService,
  ) {
    // this.partMasterTable$ = this.filter.valueChanges.pipe(
    // 	startWith(''),
    // 	map((text) => search(text, pipe)),
    // );
    this.getAllUsers()
    this.handleSelectedZone()
  }

  ngOnInit() {
    this.getAllGroups()
  }

  ngAfterViewInit(): void {
  }

  getAllUsers() {
    this.usersService.loadParts().subscribe(
      (res: any) => {
        this.users = res.data.users
        this.isLoading = false;
        this.length = res.length;
        this.code += this.length

        this.handleFormValue()
      }, (error: any) => {
				this.isLoading = true;
			}
    )  
  }

  getAllGroups() {
    this.groupsService.loadGroups().subscribe((res: any) => {
      this.groups = res.data.groups
    })
  }

  handleFormValue() {
    this.zoneMasterForm = this.formBuilder.group({
      code: this.code,
      name: '',
      password: '',
      groupId: '',
      isLeader: true,
      type: '',
      email: '',
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
    this.usersService.postParts(data).subscribe(
      (response) => {
        this.getAllUsers()
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

    this.usersService.deleteParts(this.deleteId).subscribe(
      (res: any) => {
        console.log('Deletion successful:', res);
        this.getAllUsers();
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
		this.users.forEach(element => {
			element.isEdit = false;
		});
		groupObj.isEdit = true

	}

	onSave(groupObj: any){
		this.usersService.updateUser(groupObj._id, groupObj).subscribe(
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
