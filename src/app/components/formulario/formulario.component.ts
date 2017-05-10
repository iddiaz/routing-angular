import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  idFormulario = 1;
  propiedadEnClase = 123;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegar( parametro: number ){
    console.log(parametro);
    this.router.navigate(['/formularios', parametro ]);

  }

}
