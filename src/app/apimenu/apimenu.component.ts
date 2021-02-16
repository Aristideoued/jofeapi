import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';
import {render  } from "creditcardpayments/creditCardPayments";
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
moov:any="../assets/images/moovMo.png"
paypal_image:any="../assets/images/Paypal.png"
mobil_image:any="../assets/images/om.png"
visa_image:any="../assets/images/visa.png"
m_image:any="../assets/images/moov.png"
jofe:any="../assets/images/jofelogo.jpg"
Message_type:string;
Message_typeMoov:string;
rps:any;
rpsMoov:any;
notification:boolean=false;
bol:string;
bolMoov:string;
bolCard:string;
Message_typeCard:string;
notificationMoov:boolean=false;
total:number;
phone:string;
phoneMoov:string;
montant:number;
montantMoov:number;
otp:string;
api:Api[];
responseT:string;
Mobil:number;
Carte:number;
Paypal:number;
Mobi:number;
isClicked:boolean ;
url:string;
urlMoov:string;
xmls:Observable<string>;
result:any;
resultMoov:any;
request_id:string;
message:string;
remarks:string;




constructor(private formBuilder:FormBuilder,
          private _apiService:ApiService,
          private router:Router) {
          

}
 addForm:FormGroup;
 addFormMoov:FormGroup;
 addForm2:FormGroup;
  ngOnInit(): void {


  this.initFormOM()

this.addForm2=this.formBuilder.group({
username:['',[Validators.required]],
cardNumber:['',[Validators.required]],
dateexM:['',[Validators.required]],
dateexY:['',[Validators.required]],
cvv:['',[Validators.required]],
montant:['',[Validators.required]]

});
this.addFormMoov=this.formBuilder.group({

numero:['',[Validators.required]],
montant:['',[Validators.required]]

});

this._apiService.getApi().subscribe((data:Api[])=>{
       this.api=data;

      });


  }

  initFormOM(){
    this.total=100;
    this.Message_type="";
    //console.log(this.Message_type)
    this.addForm=this.formBuilder.group({
    numero:['',[Validators.required,Validators.maxLength(8)]],
    otp:['',[Validators.required,Validators.maxLength(6)]],
    //montant:['',[Validators.required]]
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

/*paypal(){
   this.router.navigate(['paypal'])
}
*/
resetF(){
  this.addForm.reset();


  this.Message_type=" "
  this.notification=false
  this.bol=""
}

Paypals(){

  this.Mobil=0;
  this.Mobi=0;
  this.Carte=0;
  this.Paypal=1;
  /*render(
          {
            id:"#myPaypalButtons",
            currency:"USD",
            value:"100.00",
            onApprove:(details)=>{
              alert("Paiement effectué avec succès")
            }
          }
        )*/
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
  //this.montant=this.addForm.value.montant;

  this.result=this._apiService.sendPostRequest(this.phone,this.otp,this.total,this.url).subscribe((res:Response)=>{
    this.rps=res;
    this.Message_type=this.rps.Message
    this.notification=true;

    console.log(this.Message_type)
    if(this.Message_type.indexOf("succes")!==-1){
      this.Message_type="Paiement effectué avec succès"
      this.bol="s"
    }
    else{
      this.bol="e";
    }
    //this.addForm.reset()
  }
  );
    //return this.Message_type;

//console.log(this.Message_type)
//window.location.reload(false);
this.bol=""
}
  onSubmitMoov(){
    const extended_data=JSON.stringify({

    })
    //this.urlMoov= "https://127.0.0.1:4200/api/gateway/3pp/transaction/process/";
    console.log(this.addFormMoov.value);
    this.request_id="TESTACCOUNT-"+this.addFormMoov.value.numero
    this.message="Payement de "+this.total.toString()+" à Jo'Fé Digital , veuillez entrez votre code pin pour confirmer"
    this.remarks="TEST"

    this.montantMoov=this.addFormMoov.value.montant;
    this.phoneMoov=this.addFormMoov.value.numero;
    this.resultMoov=this._apiService.sendPostRequestMoov(this.phoneMoov,this.montantMoov,this.message,this.remarks,this.request_id,extended_data).subscribe((res:Response)=>{
      this.rpsMoov=res;
      this.Message_typeMoov=this.rpsMoov.Message
      this.notificationMoov=true;
      console.log(this.Message_typeMoov)
        this.bolMoov="e";
    }
    );
      //return this.Message_typeMoov;

  //console.log(this.Message_type)


    }
  CardPayment(){
      //console.log(this.addForm2.value);
      //  this.result=this._apiService.sendPostRequestCard(this.addForm2.value.username,this.addForm2.value.cardNumber,this.addForm2.value.dateexM,this.addForm2.value.dateexY,this.addForm2.value.cvv,this.addForm2.value.montant);
        (<any>window).Stripe.card.createToken({
    //username:this.addForm2.value.username,
    number: this.addForm2.value.cardNumber,
    exp_month: this.addForm2.value.dateexM,
    exp_year:   this.addForm2.value.dateexY,
    cvc: this.addForm2.value.cvv
  }, (status: number, response: any) => {
    if (status === 200) {
      let token = response.id;
      this._apiService.chargeCard(token,this.total);
    this.bolCard="s";
    this.Message_typeCard="Paiement effectué avec succès"
    } else {
      this.bolCard="e";
      this.Message_typeCard="Echec de paiement"
      console.log(response.error.message);
    }
  });
    }
}
