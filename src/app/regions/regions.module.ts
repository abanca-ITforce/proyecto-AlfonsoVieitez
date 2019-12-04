import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { RegionListComponent } from './region-list/region-list.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [RegionsComponent, RegionListComponent],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    SharedModule,
    MatListModule,
    MatCardModule
  ]
})
export class RegionsModule { }
