import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';
import Granim from 'granim';
import AOS from 'aos';
import Elevator from 'elevator.js';
import iconate from 'iconate';

@Component({
    selector: 'app-buscar',
    templateUrl: './buscar.component.html',
    styleUrls: ['./buscar.component.less']
})
export class BuscarComponent implements OnInit {


  busqueda;

  users=[{fullName:"Pedro", user: "pedro123"},
  {fullName:"Marto", user: "marto456"},{fullName:"Lucas", user: "lucas789"}];

  siguiendo;


  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }


  ngOnInit() {

    AOS.init();

  }


  seguir(event){

  }

  otroPerfil(event, user){

    this.router.navigate(['/perfil']);

  }


}