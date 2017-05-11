import { FrmEditarComponent } from './components/formularios/frm-editar/frm-editar.component';
import { FrmNuevoComponent } from './components/formularios/frm-nuevo/frm-nuevo.component';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { MovimientoComponent } from './components/rutas/movimiento/movimiento.component';
import { BuscadorComponent } from './components/rutas/buscador/buscador.component';

import { MOVIMIENTOS_ROUTES } from './components/rutas/movimiento/movimiento.routes';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formularios', component: FormularioComponent },
  // ruta por parametro
  { 
    path: 'formularios/:idFormulario',
    component: MovimientoComponent,
    children: MOVIMIENTOS_ROUTES
  },
  { path: 'buscador/:termino', component: BuscadorComponent },
  { path: 'seguridad', component: SeguridadComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROPUTING = RouterModule.forRoot(routes);