import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
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
    selector: 'app-notificacion',
    templateUrl: './notificacion.component.html',
    styleUrls: ['./notificacion.component.less']
})
export class NotificacionComponent implements OnInit {


  emisor;

  mensaje;

  class01;

  tuit;

  dueno;

  seguidorNuevo=false;

  likeAtuit=false;

  likeART=false;

  rtART=false;

  rtAtuit=false;

  @Input('emisorNOTI') emisorNOTI: string;
  @Input('receptorNOTI') receptorNOTI: string;
  @Input('seguidorNuevoNOTI') seguidorNuevoNOTI: number;
  @Input('likeAtuitNOTI') likeAtuitNOTI: number;
  @Input('likeARTNOTI') likeARTNOTI: number;
  @Input('rtARTNOTI') rtARTNOTI: number;
  @Input('rtAtuitNOTI') rtAtuitNOTI: number;
  @Input('idTuitNOTI') idTuitNOTI: number;

  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) {}


  ngOnInit() {

    AOS.init();

    this.emisor=this.emisorNOTI;


    switch(1) {
      case this.seguidorNuevoNOTI:
        this.seguidorNuevo=true;
        this.class01="card text-white bg-info mb-3";
        this.mensaje="te ha seguido!!";
        break;
      case this.likeARTNOTI:
        this.likeART=true;
        this.class01="card text-white bg-danger mb-3";
        this.mensaje="ha likeado tu Retuit:";
        break;
      case this.likeAtuitNOTI:
        this.likeAtuit=true;
        this.class01="card text-white bg-danger mb-3";
        this.mensaje="ha likeado tu tuit:";
        break;
      case this.rtARTNOTI:
        this.rtART=true;
        this.class01="card text-white bg-success mb-3";
        this.mensaje="ha retuiteado tu Retuit:";
        break;
      case this.rtAtuitNOTI:
        this.rtAtuit=true;
        this.class01="card text-white bg-success mb-3";
        this.mensaje="ha retuiteado tu tuit:";
        break;
    }


    if(!this.seguidorNuevo){

      let idTUIT = this.idTuitNOTI;

      const data = { idTUIT: idTUIT };
  
      this.tuit = "holaa";

      this.dueno = "luna123";

    }



  }



}