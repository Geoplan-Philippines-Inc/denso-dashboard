import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class ZoneMasterService {
  constructor(
    private http:HttpClient
  ) { }

  readonly zoneUrl = Constants.development.apiUrl.zone;

  loadParts(){
    return this.http.get(this.zoneUrl);
  }
  // https://denso-backend.onrender.com/api/geo/v1/parts

  postParts(data: any){
    return this.http.post(this.zoneUrl, data);
  }

  updateZone(_id: any, data: any) {
    return this.http.patch(this.zoneUrl, _id, data)
  }

  deleteParts(_id: any){
    return this.http.delete(this.zoneUrl + _id)
  }
}
