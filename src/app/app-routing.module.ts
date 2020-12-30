import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';

import { ViewapiComponent } from './viewapi/viewapi.component';
import { ApiComponent } from './api/api.component';
import { ApimenuComponent } from './apimenu/apimenu.component';



const routes: Routes = [

  {     path:'api',
        component:ApiComponent
      },
      {     path:'apimenu',
            component:ApimenuComponent
          },

  {     path:'viewapi',
        component:ViewapiComponent},


        {
          path:'',
          redirectTo:'/viewapi',
          pathMatch:'full'
        }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
