
import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';
import{Api} from '../api';
import { Router } from "@angular/router";

@Component({
  selector: 'app-viewapi',
  templateUrl: './viewapi.component.html',
  styleUrls: ['./viewapi.component.css']
})
export class ViewapiComponent implements OnInit {

  api:Api[];
  _id:number;
  constructor(private _apiService:ApiService,
            private router:Router) { }

  ngOnInit(){
    
  this.loadApi();

  }

  loadApi(){
  this._apiService.getApi().subscribe((data:Api[])=>
  {this.api=data},
  error => {console.log('erreur')},
  () => {console.log('apis chargés avec succès')}

  );
  }
  delete(api:Api):void{
  this._apiService.deleteApi(api.id)
  .subscribe(data=>{
   this.api=this.api.filter(u => u !== api);
  });

  }

  edit(api:Api){
  this._id=api.id;
  this.router.navigateByUrl("/home/id/(homeOutlet:ediapi/"+this._id+")" );

  }



}
