import { Component } from '@angular/core';

import { AnimePage } from './../anime/anime.page';
import{ModalController} from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public modalController: ModalController
  ) {}
  async openAnime() {
    const modal = await this.modalController.create({
      component: AnimePage
    });
    return await modal.present();
  }

}
