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
    selector: 'app-notis',
    templateUrl: './notis.component.html',
    styleUrls: ['./notis.component.less']
})
export class NotisComponent implements OnInit {

  notis;

  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) {

   }


  ngOnInit() {

    AOS.init();

    this.getNotis();

  }

  getNotis(){

    this.notis = [
    {receptor: "Luna", emisor: "Messi", seguidorNuevo: 1, likeAtuit: 0, 
    likeART:0, rtART: 0, rtAtuit: 0, idTuit: 123},
    {receptor: "Luna", emisor: "Messi", seguidorNuevo: 0, likeAtuit: 1, 
    likeART:0, rtART: 0, rtAtuit: 0, idTuit: 123},
    {receptor: "Luna", emisor: "Messi", seguidorNuevo: 0, likeAtuit: 0, 
    likeART:1, rtART: 0, rtAtuit: 0, idTuit: 123},
    {receptor: "Luna", emisor: "Messi", seguidorNuevo: 0, likeAtuit: 0, 
    likeART:0, rtART: 1, rtAtuit: 0, idTuit: 123},
    {receptor: "Luna", emisor: "Messi", seguidorNuevo: 0, likeAtuit: 0, 
    likeART:0, rtART: 0, rtAtuit: 1, idTuit: 123},
    {receptor: "Luna", emisor: "Messi", seguidorNuevo: 0, likeAtuit: 0, 
    likeART:0, rtART: 0, rtAtuit: 0, idTuit: 123}]


  }



}