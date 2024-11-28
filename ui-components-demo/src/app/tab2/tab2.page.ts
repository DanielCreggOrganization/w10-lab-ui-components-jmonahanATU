import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, 
         IonBadge, IonAvatar, IonThumbnail, IonItemSliding, IonItemOptions, 
         IonItemOption, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonAvatar,
    IonThumbnail,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    ExploreContainerComponent
  ]
})
export class Tab2Page {

  constructor() {}

}
