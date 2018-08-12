import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }   from './main/main.component';


import { LoginComponent }  from './session/login/login.component';
import { RegisterComponent }  from './session/register/register.component';

const appRoutes: Routes = [
	{	
		path: 'session/login',
		component: LoginComponent,
	},{	
		path: 'session/register',
		component: RegisterComponent,
	},{
		path:'',
		component:LoginComponent
	}
	,{
	 	path: 'dashboard',
	 	component: MainComponent,
	 	children: [
			{ path: '', component: LoginComponent }
	 	]
  	}
];

@NgModule({
  	imports: [RouterModule.forRoot(appRoutes)],
 	exports: [RouterModule],
  	providers: []
})
export class RoutingModule { }
