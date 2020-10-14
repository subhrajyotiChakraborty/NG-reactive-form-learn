import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'data-entry',
    loadChildren: () => import('./components/data-entry/data-entry.module').then(m => m.DataEntryModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dash-board/dash-board.module').then(m => m.DashBoardModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
