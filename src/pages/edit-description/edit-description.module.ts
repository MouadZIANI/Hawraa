import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditDescriptionPage } from './edit-description';

@NgModule({
  declarations: [
    EditDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(EditDescriptionPage),
  ],
})
export class EditDescriptionPageModule {}
