import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';
import Granim from 'granim';
import AOS from 'aos';
import Elevator from 'elevator.js';

@Component({
    selector: 'app-txtAreaTuitear',
    templateUrl: './txtAreaTuitear.component.html',
    styleUrls: ['./txtAreaTuitear.component.less']
})
export class TxtAreaTuitearComponent implements OnInit {

  @Output("getTuitsMiPerfil") getTuitsMiPerfil: EventEmitter<any> = new EventEmitter();
  @Output("getTuitsTimeline") getTuitsTimeline: EventEmitter<any> = new EventEmitter();

  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }


  ngOnInit() {

  }

  tuitear(event){

  }


}