
import { Injectable } from '@angular/core';
import{Api} from './api';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { API_URLS } from "./config/api.url.config";
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient) { }
    getApi(){
      return this.http.get(API_URLS.Api_URLS);
    }

    createApi(api:Api){
      return this.http.post(API_URLS.Create_urls,api);
    }

    sendPostRequest(a:string,b:Observable<string>){
      let headers = new HttpHeaders();
            headers = headers.append('Content-Type', 'text/xml');
            headers = headers.append('Accept', 'text/xml');
     return this.http.post(a,b ,{ headers: headers, responseType: 'text' });

    }

    getApiById(id:number){
      return this.http.get<Api[]>(API_URLS.GetById_url + id);
    }
    updateApi(api:Api){

      return this.http.put(API_URLS.Update_url + '=' + api.id,api);
    }
    deleteApi(id:number){
  return this.http.delete<Api[]>(API_URLS.Delete_url+'='+ id);

}

getXlm() {
    return this.http
      .get("/assets/orange.xml", { responseType: "text" });

  }

}
