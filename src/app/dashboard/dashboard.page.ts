import { SharedModule } from '../shared/shared.module';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonItem, IonButton, IonIcon, IonInput, IonGrid, IonRow, IonCol, IonicSlides } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { paperPlane } from 'ionicons/icons';
import { MTileComponent } from '../shared/components/m-tile/m-tile.component';
import { MButtonComponent } from '../shared/components/m-button/m-button.component';
import { GlobalService } from '../shared/services/global.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  standalone: true,
  imports: [IonGrid, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonFooter, IonButton, IonIcon, IonInput, ReactiveFormsModule, MTileComponent, MButtonComponent, IonRow, IonCol, NgFor, SharedModule],
})
export class Tab1Page implements OnInit {
  messageForm: FormGroup;
  users: any = [];
  constructor(
    private fb: FormBuilder,
    private _gService: GlobalService
  ) {
    this.messageForm = this.fb.group({
      message: [null],
    });

    addIcons({ paperPlane });
  }

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: [null],
    });

    this.users = this._gService.getDashboard();
  }

  submitMessage() {
    this.messageForm.reset();
  }

}
