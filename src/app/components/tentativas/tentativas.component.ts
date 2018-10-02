import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoCheio: string = '../../../assets/heart-transparent-video-game-6.png'

  constructor() { }

  ngOnInit() {
  }

}
