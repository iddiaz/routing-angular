
// modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LazyLoadingModule } from './lazy-loading/lazy-loading.module';

// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';

// rutas
import { APP_ROPUTING } from './app.routes';
import { MovimientoComponent } from './components/rutas/movimiento/movimiento.component';
import { Movimiento2Component } from './components/rutas/movimiento-2/movimiento-2.component';
import { BuscadorComponent } from './components/rutas/buscador/buscador.component';

import { FrmEditarComponent } from './components/formulario/frm-editar/frm-editar.component';
import { FrmNuevoComponent } from './components/formulario/frm-nuevo/frm-nuevo.component';

import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormularioComponent,
    SeguridadComponent,
    MovimientoComponent,
    Movimiento2Component,
    BuscadorComponent,
    FrmNuevoComponent,
    FrmEditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROPUTING,
    LazyLoadingModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
