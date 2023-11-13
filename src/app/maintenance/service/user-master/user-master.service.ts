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

  readonly tagsUrl = Constants.development.apiUrl.tags;

  loadParts(){
    return this.http.get(this.tagsUrl);
  }
  // https://denso-backend.onrender.com/api/geo/v1/parts

  postParts(data: any){
    return this.http.post(this.tagsUrl, data);
  }

  deleteParts(_id: any){
    return this.http.delete(this.tagsUrl, _id)
  }
}
