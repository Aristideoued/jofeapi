import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import{HttpClient} from '@angular/common/http';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
 addForm:FormGroup;
 url :String;
 xml :String;
  ngOnInit(): void {
  
}

/*  payment(){
    this.url= "https://testom.orange.bf:9008/payment";
    this.xml="<?xml version="1.0" encoding="UTF-8"?>
                <COMMAND>
                    <TYPE>OMPREQ</TYPE>
                    <customer_msisdn>'.$request->phone.'</customer_msisdn>
                    <merchant_msisdn>76755085</merchant_msisdn>
                    <api_username>USERNAME</api_username>
                    <api_password>PASSWORD</api_password>
                    <amount>100</amount>
                    <PROVIDER>101</PROVIDER>
                    <PROVIDER2>101</PROVIDER2>
                    <PAYID>12</PAYID>
                    <PAYID2>12</PAYID2>
                    <otp>'.$request->otp.'</otp>
                    <reference_number>789233</reference_number>
                    <ext_txn_id>201500068544</ext_txn_id>
                </COMMAND>";


  }*/

}
