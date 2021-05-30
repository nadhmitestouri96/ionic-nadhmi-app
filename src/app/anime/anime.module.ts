import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './../app-routing.module';

import { AnimePageRoutingModule } from './anime-routing.module';

import { AnimePage } from './anime.page';

@NgModule({
  imports: [

  CommonModule,
    FormsModule,
    IonicModule,
    AppRoutingModule,


  ],
  declarations: [AnimePage]
})
export class AnimePageModule {}
