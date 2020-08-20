import { NgModule } from '@angular/core';

import { ModalInfoPage } from './modal-info.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule
  ],
  declarations: [ModalInfoPage]
})
export class ModalInfoPageRoutingModule {}
