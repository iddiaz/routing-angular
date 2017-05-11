import { Component, OnInit } from '@angular/core';

import { AuthGuardService } from './../../services/auth-guard.service';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent implements OnInit {

  constructor(private authGuardService: AuthGuardService) { }

  ngOnInit() {
  }

}
