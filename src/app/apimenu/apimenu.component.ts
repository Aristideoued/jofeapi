import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';
import{Api} from '../api';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-apimenu',
  templateUrl: './apimenu.component.html',
  styleUrls: ['./apimenu.component.css']
})
export class ApimenuComponent implements OnInit {
back_image:any="../assets/images/bc.png"
panier_image:any="../assets/images/pan.png"
paypal_image:any="../assets/images/Paypal.png"
mobil_image:any="../assets/images/om.png"
visa_image:any="../assets/images/visa.png"
m_image:any="../assets/images/logoMobi.png"

total:number;
phone:string;
api:Api[];
responseT:string;
Mobil:number;
Carte:number;
Paypal:number;
Mobi:number;
isClicked:boolean ;
url:string;
xmls:Observable<string>;
result:any;


constructor(private formBuilder:FormBuilder,
          private _apiService:ApiService,
          private router:Router) {

}
 addForm:FormGroup;
  ngOnInit(): void {
this.total=0;
this.addForm=this.formBuilder.group({
numero:['',[Validators.required,Validators.maxLength(8)]],
otp:['',[Validators.required,Validators.maxLength(6)]],
montant:['',[Validators.required]]


});
this._apiService.getApi().subscribe((data:Api[])=>{
       this.api=data;

      });

  }
   xmlToString(xmlData) {
          var xmlString;
          xmlString = (new XMLSerializer()).
          serializeToString(xmlData);
          return xmlString;
      }
Mobils(){
  this.Mobi=0;
  this.Paypal=0;
  this.Carte=0;
  this.Mobil=1;
  return this.Mobil;

}
Mobic(){
  this.Paypal=0;
  this.Carte=0;
  this.Mobil=0;
  this.Mobi=1;
  return this.Mobi;
}
Paypals(){

  this.Mobil=0;
  this.Mobi=0;
  this.Carte=0;
  this.Paypal=1;
  return this.Paypal;
}
Cartes(){
  this.Mobi=0;
  this.Mobil=0;
  this.Paypal=0;
  this.Carte=1;
  return this.Carte;
}
onSubmit(){
  console.log(this.addForm.value);
  this.url= "https://testom.orange.bf:9008/payment";
  this.phone=this.addForm.value.numero;

/*this.xlms=  <?xml version="1.0" encoding="UTF-8"?>
               <COMMAND>
                      <TYPE>OMPREQ</TYPE>
                      <customer_msisdn>this.phone</customer_msisdn>
                      <merchant_msisdn>77919173</merchant_msisdn>
                      <api_username>JOFEDIGITAL</api_username>
                      <api_password>DIGITAL@9</api_password>
                      <amount>100</amount>
                      <PROVIDER>101</PROVIDER>
                      <PROVIDER2>101</PROVIDER2>
                      <PAYID>12</PAYID>
                      <PAYID2>12</PAYID2>
                      <otp>'.$request->otp.'</otp>
                      <reference_number>789233</reference_number>
                      <ext_txn_id>201500068544</ext_txn_id>
                  </COMMAND>*/




  this.result=this._apiService.sendPostRequest(this.url,this.xmls);
  /*this.result='<xml>'+this.result+'</xml>';
  let parser = new DOMParser();
  let xml = parser.parseFromString( this.result, "text/xml");*/
  this.responseT=this.result.responseType;
  console.log(this.result);
  if (this.responseT=='200') {
  console.log("succès");
  }
  else{
    console.log(this.responseT);
  }
  }
  onSubmitc(){
    console.log(this.addForm.value);

    }
}
