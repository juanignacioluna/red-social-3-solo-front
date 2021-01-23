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
    selector: 'app-posteo',
    templateUrl: './posteo.component.html',
    styleUrls: ['./posteo.component.less']
})
export class PosteoComponent implements OnInit {

  classDIV;

  fullName;

  rtSiOnoBOOL;

  hidden = false;

  @Input('idTUIT') idTUIT: number;
  @Input('userTuit2') userTuit2: string;
  @Input('mgTuit') mgTuit: number;
  @Input('rtTuit') rtTuit: number;
  @Input('tuitTuit') tuitTuit: string;
  @Input('tuitOrRetuit') tuitOrRetuit: string;
  @Input('rtSiOno') rtSiOno: string;
  @Input('rtPOR') rtPOR: string;
  
  headers = new Headers();

  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }


  ngOnInit() {

    this.verificarSiLoFavie();
    this.verificarSiLoRT();


    if(this.rtSiOno=="si"){
      this.rtSiOnoBOOL = true;
    }else if(this.rtSiOno=="no"){
      this.rtSiOnoBOOL = false;
    }
    


    if(this.tuitOrRetuit=="tuit"){

      this.classDIV = "card text-white orange darken-4 mb-3";

    }else{

      this.classDIV = "card text-white green darken-4 mb-3";

      var node = document.createElement("DIV");                 
      node.setAttribute("class", "card-header header");
      var textnode = document.createTextNode("RT por @leomessi");         
      node.appendChild(textnode);                              
      document.getElementById("post01").appendChild(node);     

      document.getElementById("post01").insertBefore(node, document.getElementById("post01").firstChild);

    }

    let user = this.userTuit2;

    const data = { user: user};

    this.fullName = this.userTuit2;

  }

  verificarSiLoFavie(){

    let idTUIT = this.idTUIT;

    const data = { idTUIT: idTUIT};

    if(Math.random()>=0.5){

        $("#"+this.idTUIT).attr("class", "btn pink lighten-3");

        $("#" + this.idTUIT + " > i").attr("class", "fas fa-heartbeat");

    }

  }


  verificarSiLoRT(){

    let idTUIT = this.idTUIT;

    const data = { idTUIT: idTUIT};

    if(Math.random()>=0.5){

        $('button[name="'+this.idTUIT+'"]').attr("class", "btn cyan");

        $('button[name="'+this.idTUIT+'"] > i').attr("class", "fas fa-bullhorn");

    }

  }



  getDataPosteo(){

    let idTUIT = this.idTUIT;

    const data = { idTUIT: idTUIT};

      this.mgTuit = Math.round(Math.random()*100);
      this.rtTuit = Math.round(Math.random()*100);
  }


  clickMG(event){


    console.log(event.target.tagName);


    if(event.target.tagName=="BUTTON"){

      var iconElement = event.target.querySelector('i');

      var boton = event.target;

    }else if(event.target.tagName=="I"){

      var iconElement = event.target;

      var boton = event.target.parentElement;

    }


    if(iconElement.getAttribute("class")=="fas fa-heart"){

        var options = {
          from: 'fa-heart',
          to: 'fa-heartbeat',
          animation: 'zoomIn'
        };

        boton.setAttribute("class", "btn pink lighten-3");

        this.mgTuit++

    }else if(iconElement.getAttribute("class")=="fas fa-heartbeat"){

        var options = {
          from: 'fa-heartbeat',
          to: 'fa-heart',
          animation: 'tada'
        };

        boton.setAttribute("class", "btn red darken-4");

        this.mgTuit--

    }


    iconate(iconElement, options);

    // this.fetchMG();

  }


  clickRT(event){

    if(event.target.tagName=="BUTTON"){

      var iconElement = event.target.querySelector('i');

      var boton = event.target;

    }else if(event.target.tagName=="I"){

      var iconElement = event.target;

      var boton = event.target.parentElement;

    }

    if(iconElement.getAttribute("class")=="fas fa-retweet"){

        var options = {
          from: 'fa-retweet',
          to: 'fa-bullhorn',
          animation: 'zoomIn'
        };

        boton.setAttribute("class", "btn cyan");

        this.rtTuit++

    }else if(iconElement.getAttribute("class")=="fas fa-bullhorn"){

        var options = {
          from: 'fa-bullhorn',
          to: 'fa-retweet',
          animation: 'tada'
        };

        boton.setAttribute("class", "btn green lighten-1");

        this.rtTuit--

    }

    iconate(iconElement, options);

    // this.fetchRT();

  }


  otroPerfil(event, userTuit2){

    this.router.navigate(['/otroPerfil/'+userTuit2]);

  }


}