import { NgModule } from '@angular/core';
import {DividerComponent} from './components/Divider/index.component';
import {TextComponent} from './components/Text/index.component';

const COMPONENTS = [
  DividerComponent,
  TextComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class NgHabaneroModule { }
