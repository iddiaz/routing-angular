import { Injectable } from '@angular/core';
// vamos a importar el router porque si no cumple las condiciones que necesito lo voy a sacar de aqui.
// Necesitamos ActivatedRouteSnapshot porque nos va a indcar la pagina en la que esta y a la cual se va a mover
// RouterstateSnapshot indica el estado actual,
// CanActivated indicará si puede activar esa ruta o no
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {
  isAutenticated: boolean = false;
  
  constructor( private router: Router ) { 
    console.log('servicio listo');
  }
  
  // La interface CanActivate necesita la funcion canActivate
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    if( this.isAutenticated) {
      console.log('EL guard paso');
      return true;
    }

    console.log('bloqueado por el guard');
    this.router.navigate(['home']);
    return false;

  }

}