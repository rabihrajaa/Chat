import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


export const tabsRoutess: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('../pages/user-list/user-list.page').then(m => m.UserListPage),
      },
      {
        path: 'tab2',
        loadComponent: () => import('../pages/chat-room/chat-room.page').then(m => m.ChatRoomPage),
      },
      {
        path: 'tab3',
        loadComponent: () => import('../pages/user-profile/user-profile.page').then(m => m.UserProfilePage),
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full'
      }
    ]
  }
];

export class TabsPageRoutingModule {}
