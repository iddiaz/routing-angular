import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';

const routes = [
  { path: 'lazy', component: LazyLoadingComponent }
]

export const LAZY_ROUTING = RouterModule.forChild(routes);