
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
rsp:any
responseMessage:string
  constructor(private http:HttpClient) { }
    getApi(){
      return this.http.get(API_URLS.Api_URLS);
    }

    getTrace(){
      return this.http.get(API_URLS.Trace_URLS);
    }

    createApi(api:Api){
      return this.http.post(API_URLS.Create_urls,api);
    }

    httpOptions = {
      headers: new HttpHeaders({
  'Content-Type':  'application/json'
})
};

    sendPostRequest(phone:string,otp:string,montant:number,url:string){
      let headers = new HttpHeaders();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          const body = JSON.stringify(
            {phone: phone,
             otp:otp,
             montant:montant,
             url:url
           });
       return this.http.post(API_URLS.lien+'/payment',
      body,{
        headers:headers
      });



    }

    sendPostRequestMoov(phone:string,montant:number,message:string,remarks:string,request_id:string,extended_data:any){
      let headers = new HttpHeaders();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          const body = JSON.stringify(
            {phone: phone,

             montant:montant,

             message:message,
             remarks:remarks,
             request_id:request_id,
             extended_data:extended_data
           });
       return this.http.post(API_URLS.lien+'/paymentMoov',
      body,{
        headers:headers
      });



    }
    /*res(){
      return this.rsp;
    }*/

  chargeCard(token: string,montant:number) {
    let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        const body = JSON.stringify(
          {token: token,
           montant:montant
         });
   this.http.post(API_URLS.lien+'/cardPayment', body, {headers: headers})
    .subscribe(resp => {
      console.log(resp);
    })
}
    sendPostRequestCard(username:string,cardNumber:string,dateexM:number,dateexY:number,cvv:string,montant:number){

      let headers = new HttpHeaders();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          const body = JSON.stringify(
            {username: username,
             cardNumber:cardNumber,
             dateexM:dateexM,
             dateexY:dateexY,
             cvv:cvv,
             montant:montant
           });
       return this.http.post(API_URLS.lien+'/cardPayment',
      body,{
        headers:headers
      }).subscribe((data:any)=>{
        console.log(data);
      }
      );




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
}
