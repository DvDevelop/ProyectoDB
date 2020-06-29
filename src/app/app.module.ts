import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomenlComponent } from './components/homenl/homenl.component';
import { HomelogComponent } from './components/homelog/homelog.component';
import { HistorialComponent } from './components/historial/historial.component';
import { PapeleraComponent } from './components/papelera/papelera.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';

@NgModule({
	declarations: [ AppComponent, HeaderComponent, HomenlComponent, HomelogComponent, HistorialComponent, PapeleraComponent, PublicacionComponent, LoginComponent, SingupComponent ],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
