
import { Component, OnInit } from '@angular/core';
// Importamos el router para poder navegar al hacer click en el formulario de busqueda
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor( private router: Router) {

   }

  ngOnInit() {
  }

  buscar(termino: string){
    console.log(termino);
    termino = termino.toLowerCase();
    this.router.navigate( ['/buscador', termino] );
  }

}
