import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';
import Granim from 'granim';
import AOS from 'aos';
import Elevator from 'elevator.js';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }


  ngOnInit() {

  }

  notis(event){
    this.router.navigate(['/notis']);
  }

  timeline(event){
    this.router.navigate(['/timeline']);
  }

  perfil(event){
    this.router.navigate(['/perfil']);
  }

  buscar(event){

    this.router.navigate(['/buscar/'+$("#buscarInput").val()]);
  }

  logout(event){

    this.router.navigate(['/home']);

  }


}