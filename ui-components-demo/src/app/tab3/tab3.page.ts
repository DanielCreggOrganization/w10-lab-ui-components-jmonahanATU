import { Component, ViewChild } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButton,
  IonModal,
  IonItem,
  IonLabel,
  IonInput,
  IonButtons,
  IonIcon,
  AlertController,
  ToastController
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    ExploreContainerComponent,
    IonButton,
    IonModal,
    IonItem,
    IonLabel,
    IonInput,
    IonButtons,
    IonIcon
  ],
})
export class Tab3Page {
  @ViewChild(IonModal) modal!: IonModal;

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  dismissModal() {
    this.modal.dismiss();
  }

  async showMultiActionAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm Action',
      message: 'Are you sure you want to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => this.showToast('Action cancelled')
        },
        {
          text: 'Delete',
          cssClass: 'danger',
          handler: () => this.showToast('Item deleted')
        },
        {
          text: 'Save',
          cssClass: 'primary',
          handler: () => this.showToast('Item saved')
        }
      ]
    });
    await alert.present();
  }

  async showToast(message: string, position: 'top' | 'middle' | 'bottom' = 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: position,
      buttons: [
        {
          text: 'Close',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
}
