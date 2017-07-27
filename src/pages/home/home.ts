import { Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Subtraction } from '../subtraction/subtraction';
import { Mutiplication } from '../mutiplication/mutiplication';
import { Division } from '../division/division';
import { Levelscreen } from '../levelscreen/levelscreen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    subtractionPage = Subtraction;
    mutiplicationPage = Mutiplication;
    divisionPage = Division;
    levelscreenPage = Levelscreen;

    constructor(public navCtrl: NavController) {

    }
  }


