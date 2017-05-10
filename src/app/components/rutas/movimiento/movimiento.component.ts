import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {

  parametroRuta: any = {};

  constructor(private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe(params =>  {
      console.log(params);
      this.parametroRuta = params.idFormulario;
      if(this.parametroRuta === '1') {
        return this.parametroRuta = null;
      }
    });
  }

  ngOnInit() {
  }

}
