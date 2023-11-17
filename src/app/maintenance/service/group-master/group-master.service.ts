import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class GroupMasterService {

  constructor(
    private http: HttpClient
  ) { }

  readonly groupsUrl = Constants.development.apiUrl.groups;

  loadGroups(){
    return this.http.get(this.groupsUrl);
  } 
}