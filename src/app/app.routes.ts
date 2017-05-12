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

// Importamos el servicio que controla la seguridad en las rutas o ruta
import { AuthGuardService } from './services/auth-guard.service';


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
  { path: 'lazy', loadChildren: './lazy-loading/lazy-loading.module' },
  { path: 'seguridad', component: SeguridadComponent, canActivate: [AuthGuardService] },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROPUTING = RouterModule.forRoot(routes);