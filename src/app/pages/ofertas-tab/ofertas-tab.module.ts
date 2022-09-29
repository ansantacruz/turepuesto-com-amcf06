import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { OfertasTabComponent } from './ofertas-tab.component';
import { OfertasTabRoutingModule } from './ofertas-tab-routing.module';



@NgModule({
  declarations: [OfertasTabComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    OfertasTabRoutingModule
  ]
})
export class OfertasTabModule { }
