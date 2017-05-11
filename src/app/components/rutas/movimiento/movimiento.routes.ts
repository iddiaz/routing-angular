import { FrmEditarComponent } from './../../formulario/frm-editar/frm-editar.component';
import { FrmNuevoComponent } from './../../formulario/frm-nuevo/frm-nuevo.component';

import { RouterModule, Routes } from '@angular/router';


export const MOVIMIENTOS_ROUTES: Routes = [
  { path: 'nuevo/:otroparametro', component: FrmNuevoComponent },
  { path: 'editar', component: FrmEditarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'editar' }
];

