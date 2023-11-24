import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class TagsMasterService {
  constructor(
    private http:HttpClient
  ) { }

  readonly tagsUrl = Constants.production.apiUrl.tags;

  loadParts(){
    return this.http.get(this.tagsUrl);
  }
  // https://denso-backend.onrender.com/api/geo/v1/parts

  postTags(data: any){
    return this.http.post(this.tagsUrl, data);
  }

  updateTags(_id: any, data: any) {
    return this.http.put(this.tagsUrl + _id, data)
  }

  deleteTags(_id: any){
    return this.http.delete(this.tagsUrl + _id)
  }
}
