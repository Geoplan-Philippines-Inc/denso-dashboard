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

  readonly groupsUrl = Constants.production.apiUrl.groups;

  loadGroups(){
    return this.http.get(this.groupsUrl);
  } 

  updateGroups(_id: any, data: any) {
    return this.http.put(this.groupsUrl + _id, data)
  }
}