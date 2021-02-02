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
m_image:any="../assets/images/moov.png"
Message_type:string;
rps:any;
notification:boolean=false;
total:number;
phone:string;
montant:number;
otp:string;
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
 addForm2:FormGroup;
  ngOnInit(): void {
this.total=100;
this.Message_type="";
this.addForm=this.formBuilder.group({
numero:['',[Validators.required,Validators.maxLength(8)]],
otp:['',[Validators.required,Validators.maxLength(6)]],
montant:['',[Validators.required]]
});
this.addForm2=this.formBuilder.group({
username:['',[Validators.required]],
cardNumber:['',[Validators.required]],
dateexM:['',[Validators.required]],
dateexY:['',[Validators.required]],
cvv:['',[Validators.required]],
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
  this.url= "https://testom.orange.bf:9008/payment";
  console.log(this.addForm.value);
  this.phone=this.addForm.value.numero;
  this.otp=this.addForm.value.otp;
  this.montant=this.addForm.value.montant;

  this.result=this._apiService.sendPostRequest(this.phone,this.otp,this.montant,this.url).subscribe((res:Response)=>{
    this.rps=res;
    this.Message_type=this.rps.Message
    this.notification=true;
    console.log(this.Message_type)
  }
  );


  //console.log(this.result);

  /*if(this.rps.Message=="succès"){
    this.Message_type="s"
    this.notification=true;
  }
  else if(this.rps.Message=="utilisé"){
    this.Message_type="u";
    this.notification=true;
    //alert("Paiement non effectué , OTP deja utilisé")
  }
  else if(this.rps.Message=="non trouvé"){
    this.Message_type="nt";
    this.notification=true;
    //alert("Paiement non effectué, numero incorrect ou non compatible avec le OTP")
  }
  else if(this.rps.Message=="invalide"){
    this.Message_type="i";
    this.notification=true;

  }
  else if(this.rps.Message=="Echec de connexion"){
      this.Message_type="c";
      this.notification=true;
  }*/

    return this.Message_type;

//console.log(this.Message_type)

}







  onSubmitc(){
    console.log(this.addForm.value);

    }
  CardPayment(){
      console.log(this.addForm2.value);
        this.result=this._apiService.sendPostRequestCard(this.addForm2.value.username,this.addForm2.value.cardNumber,this.addForm2.value.dateexM,this.addForm2.value.dateexY,this.addForm2.value.cvv,this.addForm2.value.montant);
    }
}
