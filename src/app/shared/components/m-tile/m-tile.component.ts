import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'm-tile',
  templateUrl: './m-tile.component.html',
  styleUrls: ['./m-tile.component.scss'],
  standalone: true,
  imports: [IonLabel, NgClass]
})
export class MTileComponent implements OnInit {

  @Input() avatar: string;
  @Input() name: string;
  @Input() live: boolean;
  @Input() active: boolean;
  constructor() { }

  ngOnInit() { }

}
