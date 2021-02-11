import { Component, OnInit } from '@angular/core';
import{Trace} from '../trace';
import{ApiService} from '../api.service';

@Component({
  selector: 'app-trace',
  templateUrl: './trace.component.html',
  styleUrls: ['./trace.component.css']
})
export class TraceComponent implements OnInit {
  trace:Trace[];
  _id:number;
  constructor(private _apiService:ApiService) { }

  ngOnInit(){

  this.loadTrace();

  }

  loadTrace(){
  this._apiService.getTrace().subscribe((data:Trace[])=>
  {this.trace=data},
  error => {console.log('erreur')},
  () => {console.log('traces chargées avec succès')}

  );
  }

}
