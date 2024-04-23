import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'm-button',
  templateUrl: './m-button.component.html',
  styleUrls: ['./m-button.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonLabel, NgClass]
})
export class MButtonComponent {

  constructor() { }

}
