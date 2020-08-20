import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentPage } from './segment.page';
import { PipesModule } from '../../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: SegmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            PipesModule],
  exports: [RouterModule],
})
export class SegmentPageRoutingModule {}
