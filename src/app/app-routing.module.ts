import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tabsRoutes } from './tabs/tabs.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    children: tabsRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
