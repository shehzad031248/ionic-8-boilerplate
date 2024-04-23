import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonItem, IonButton, IonIcon, IonInput } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { paperPlane } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonItem, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonFooter, IonButton, IonIcon, IonInput, ReactiveFormsModule],
})
export class Tab1Page implements OnInit {
  messageForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      message: [null],
    });

    addIcons({ paperPlane });
  }

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: [null],
    });
  }

  submitMessage() {
    this.messageForm.reset();
  }

}
