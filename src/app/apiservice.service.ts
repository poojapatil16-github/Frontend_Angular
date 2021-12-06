import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl = 'http://localhost:3000/user';

  getAllData():Observable<any>{
      return this.http.get(`${this.apiUrl}`);
  }

  postData(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}`,data);
  }

  deleteData(id:any):Observable<any>{
    let ids = id;
    return this.http.delete(`${this.apiUrl}/${ids}`);
  }

  updateData(data:any , id:any):Observable<any>{
    const ids=id;
    return this.http.put(`${this.apiUrl}/${ids}`,data);
  }

  getSingleData(id:any):Observable<any>{
    let ids=id;
    return this.http.get(`${this.apiUrl}/${ids}`);
  }
}
