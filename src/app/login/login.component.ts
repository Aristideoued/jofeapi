import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import{FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addForm:FormGroup;

_id:string
constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.addForm=this.formBuilder.group({

 username:['',[Validators.required]],
 mdp:['',[Validators.required]],
  });
  }
  conect(){
    //console.log(this.addForm.value);
    //this._loginService.authenticate(this.addForm.value.username,
    //  this.addForm.value.mdp).subscribe((data:Users[]) => {
    //console.log(data[0].username)
  //this.users=data
  //this._id=this.users[0].username
     //return this.data[0].username

       //this.router.navigateByUrl('/home/'+this._id);


  //  }
  //);
  //console.log(this.data[0].username)

if(  this.addForm.value.username=="jofe" && this.addForm.value.mdp=="2885351" ){
    this.router.navigateByUrl('/viewapi');
}

  }

}
