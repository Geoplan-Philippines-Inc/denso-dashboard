import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class PartsService {
  constructor(
    private http:HttpClient
  ) { }

  readonly partsUrl = Constants.development.apiUrl.parts;

  loadParts(){
    return this.http.get(this.partsUrl);
  }
  // https://denso-backend.onrender.com/api/geo/v1/parts

  postParts(data: any){
    return this.http.post(this.partsUrl, data);
  }

  deleteParts(_id: any){
    return this.http.delete(this.partsUrl + _id)
  }

}