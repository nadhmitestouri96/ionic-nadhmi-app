import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-anime',
  templateUrl: './anime.page.html',
  styleUrls: ['./anime.page.scss'],
})
export class AnimePage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }
  close() {
    this.modalController.dismiss();
  }
}
