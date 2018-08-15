import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }   from './main/main.component';


import { LoginComponent }  from './session/login/login.component';
import { RegisterComponent }  from './session/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';


const appRoutes: Routes = [
	{	
		path: 'session/login',
		component: LoginComponent,
	},{	
		path: 'register',
		component: RegisterComponent,
	},{
		path:'',
		component:LoginComponent
	}
	// ,{
	//  	path: '',
	//  	component: MainComponent,
	//  	children: [
	// 		{ path: '', component: DashboardComponent }
	//  	]
  	// }
	 ,{
	 	path: 'dashboard',
	 	component: MainComponent,
	 	children: [
			{ path: '', component: DashboardComponent }
	 	]
  	} 
	,{
	 	path: 'team',
	 	component: MainComponent,
	 	children: [
			{ path: '', component: TeamdetailsComponent }
	 	]
  	}
];

@NgModule({
  	imports: [RouterModule.forRoot(appRoutes)],
 	exports: [RouterModule],
  	providers: []
})
export class RoutingModule { }
