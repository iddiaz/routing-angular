// modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormularioComponent,
    SeguridadComponent,
    MovimientoComponent,
    Movimiento2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROPUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
