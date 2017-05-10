import { RouterModule, Routes } from '@angular/router';

//componentes
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { MovimientoComponent } from './components/rutas/movimiento/movimiento.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formularios', component: FormularioComponent },
  //ruta por parametro
  { path: 'formularios/:idFormulario', component: MovimientoComponent },
  { path: 'seguridad', component: SeguridadComponent },
  { path: '**', pathMatch:'full', redirectTo: '' }
];

export const APP_ROPUTING = RouterModule.forRoot(routes);