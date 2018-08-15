import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { Ng2BreadcrumbModule, BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import 'hammerjs';

import { GeneAppComponent } from './app.component';
import { RoutingModule } from "./app-routing.module";
import { MainComponent } from './main/main.component';
import { MenuToggleModule } from './core/menu/menu-toggle.module';
import { MenuItems } from './core/menu/menu-items/menu-items';
import { PageTitleService } from './core/page-title/page-title.service';
import { LoginComponent } from './session/login/login.component';
import { RegisterComponent } from './session/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';


export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		RoutingModule,
		FlexLayoutModule,
		NgbModalModule.forRoot(),
		Ng2BreadcrumbModule.forRoot(),
		PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
		MenuToggleModule,
		HttpModule,
		Ng2DeviceDetectorModule.forRoot(),
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
		})
	],
	declarations: [
		GeneAppComponent,
		MainComponent,
		LoginComponent,
		RegisterComponent,
		DashboardComponent,
		AdminComponent,
		TeamdetailsComponent
	],
	bootstrap: [GeneAppComponent],
	providers: [
		MenuItems,
		BreadcrumbService,
		PageTitleService
	]
})
export class GeneAppModule { }
