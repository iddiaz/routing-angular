import { RouterModule, Routes } from '@angular/router';

//componentes
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'seguridad', component: SeguridadComponent },
  { path: '**', pathMatch:'full', redirectTo: '' }
];

export const APP_ROPUTING = RouterModule.forRoot(routes);