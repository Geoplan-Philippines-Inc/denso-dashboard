import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {
  constructor(
    private http:HttpClient
  ) { }

  readonly usersUrl = Constants.production.apiUrl.users;

  loadParts(){
    return this.http.get(this.usersUrl);
  }
  // https://denso-backend.onrender.com/api/geo/v1/parts

  postParts(data: any){
    return this.http.post(this.usersUrl, data);
  }

  updateUser(_id: any, data: any) {
    return this.http.put(this.usersUrl + _id, data)
  }

  deleteParts(_id: any){
    return this.http.delete(this.usersUrl + _id)
  }
}
