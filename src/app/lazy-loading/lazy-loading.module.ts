import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingComponent } from './lazy-loading.component';
import { RouterModule } from '@angular/router';
import { LAZY_ROUTING } from './lazy.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LAZY_ROUTING
  ],
  declarations: [LazyLoadingComponent]
})
export class LazyLoadingModule { }
