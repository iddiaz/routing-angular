import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frm-nuevo',
  template: `
    <p>
      frm-nuevo!
    </p>
  `,
  styles: []
})
export class FrmNuevoComponent implements OnInit {

    constructor(private activatedRouter: ActivatedRoute ) { 
      
      this.activatedRouter.params.subscribe(params => {
        console.log('parametros pasados a la ruta hija',params);
      })

      this.activatedRouter.parent.params.subscribe( params => {
         console.log('parametros pasados al padre y obtenidos en la ruta hija', params);
      })


    }



  ngOnInit() { }

}
