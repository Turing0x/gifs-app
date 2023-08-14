import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent }  from './components/card-list/card-list.component';
import { HomePageComponent }  from './pages/home-page/home-page.component';
import { CardComponent }      from './components/card/card.component';
import { SharedModule }       from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
