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
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {

  esUnTuit: string = "tuit";

  tuits;

  headers = new Headers();

  constructor(public activatedRoute:ActivatedRoute, 
  public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }


  ngOnInit() {

    AOS.init();

    $(".modal-backdrop").hide();

    this.getTuitsTimeline();

  }

  getTuitsTimeline(){

    this.tuits = [
    {user:"Juan", mg:10, id: 1, rtSiOno: "no", rtPOR: "", rt: 222, tuit: "holis",
    esUnTuit: "tuit"},
    {user:"Marto", mg:5, id: 2, rtSiOno: "si", rtPOR: "messi", rt: 37, tuit: "aaa",
    esUnTuit: "tuit"},
    {user:"Lucas", mg:0, id: 3, rtSiOno: "no", rtPOR: "", rt: 0, tuit: "qwerty",
    esUnTuit: "tuit"},
    {user:"Pedro", mg:2, id: 4, rtSiOno: "si", rtPOR: "messi", rt: 1, tuit: "sadasdasd",
    esUnTuit: "tuit"},
    {user:"Juan", mg:3, id: 5, rtSiOno: "no", rtPOR: "", rt: 0, tuit: ":)",
    esUnTuit: "tuit"}]

  }



}