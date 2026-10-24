import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, computed, inject, effect } from '@angular/core';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonSpinner,
  IonText,
  ToastController,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  closeCircle,
  gitNetworkOutline,
  informationCircle,
  notifications,
  refresh,
  shieldCheckmark,
  trash,
} from 'ionicons/icons';

import { PageFooterComponent } from '../components/page-footer.component';
import { PageHeaderComponent } from '../components/page-header.component';
import { LocalNetworkService } from '../services/local-network.service';

type BadgeColor = 'success' | 'warning' | 'danger' | 'medium';

@Component({
  selector: 'app-local-network',
  templateUrl: './local-network.page.html',
  styleUrls: ['./local-network.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonBadge,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonChip,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonSpinner,
    IonText,
    PageFooterComponent,
    PageHeaderComponent,
  ],
})
export class LocalNetworkPage implements OnInit, OnDestroy {
  private readonly localNetwork = inject(LocalNetworkService);
  private readonly toastController = inject(ToastController);

  readonly platform = this.localNetwork.platform;
  readonly isNative = this.localNetwork.isNative;
  readonly permission = this.localNetwork.permission;
  readonly version = this.localNetwork.version;
  readonly listening = this.localNetwork.listening;
  readonly events = this.localNetwork.events;
  readonly error = this.localNetwork.error;
  readonly busy = this.localNetwork.busy;

  readonly stateColor = computed<BadgeColor>(() => {
    switch (this.permission()) {
      case 'granted':
        return 'success';
      case 'denied':
        return 'danger';
      case 'prompt':
      case 'prompt-with-rationale':
        return 'warning';
      default:
        return 'medium';
    }
  });

  constructor() {
    addIcons({
      'close-circle': closeCircle,
      'git-network-outline': gitNetworkOutline,
      'information-circle': informationCircle,
      notifications,
      refresh,
      'shield-checkmark': shieldCheckmark,
      trash,
    });

    // Show a toast when the plugin returns an error, similar to the demo app.
    effect(() => {
      const message = this.error();
      if (!message) {
        return;
      }

      void this.showErrorToast(message);
      this.localNetwork.clearError();
    });
  }

  ngOnInit(): void {
    void this.localNetwork.check();
    void this.localNetwork.loadVersion();
  }

  ngOnDestroy(): void {
    // Never leave a native listener registered after the page is gone.
    void this.localNetwork.stopListening();
  }

  check(): void {
    void this.localNetwork.check();
  }

  request(): void {
    void this.localNetwork.request();
  }

  toggleListening(): void {
    if (this.listening()) {
      void this.localNetwork.stopListening();
    } else {
      void this.localNetwork.startListening();
    }
  }

  removeAllListeners(): void {
    void this.localNetwork.removeAllListeners();
  }

  clearEvents(): void {
    this.localNetwork.clearEvents();
  }

  private async showErrorToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'top',
      color: 'danger',
      icon: 'git-network-outline',
    });
    await toast.present();
  }
}
