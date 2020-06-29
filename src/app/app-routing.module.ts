import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialComponent } from './components/historial/historial.component';
import { HomelogComponent } from './components/homelog/homelog.component';
import { HomenlComponent } from './components/homenl/homenl.component';
import { PapeleraComponent } from './components/papelera/papelera.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';

const routes: Routes = [
	{ path: 'home', component: HomenlComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'singup', component: SingupComponent },
	{ path: 'userpage', component: HomelogComponent },
	{ path: 'historial', component: HistorialComponent },
	{ path: 'papelera', component: PapeleraComponent },
	{ path: 'publicacion', component: PublicacionComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
