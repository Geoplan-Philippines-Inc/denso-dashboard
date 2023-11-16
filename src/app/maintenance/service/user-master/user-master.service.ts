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

  readonly usersUrl = Constants.development.apiUrl.users;

  loadParts(){
    return this.http.get(this.usersUrl);
  }
  // https://denso-backend.onrender.com/api/geo/v1/parts

  postParts(data: any){
    return this.http.post(this.usersUrl, data);
  }

  deleteParts(_id: any){
    return this.http.delete(this.usersUrl + _id)
  }
}
