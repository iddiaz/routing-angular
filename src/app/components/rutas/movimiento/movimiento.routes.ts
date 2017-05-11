import { FrmEditarComponent } from './../../formularios/frm-editar/frm-editar.component';
import { FrmNuevoComponent } from './../../formularios/frm-nuevo/frm-nuevo.component';
import { RouterModule, Routes } from '@angular/router';

export const MOVIMIENTOS_ROUTES: Routes = [
  { path: 'nuevo', component: FrmNuevoComponent },
  { path: 'editar', component: FrmEditarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'editar' }
];

