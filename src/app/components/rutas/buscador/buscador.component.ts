import { Component, OnInit } from '@angular/core';

// Hay que recoger el parámetro que llega por la url
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscador',
  template: `
    <p>
      buscador Works!
    </p>
  `,
  styles: []
})
export class BuscadorComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=> {
      console.log(params['termino']);
    });
  }

}
