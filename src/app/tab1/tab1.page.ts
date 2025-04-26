import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UserListPage } from '../pages/user-list/user-list.page';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports:[IonicModule,CommonModule,UserListPage,RouterModule]
})
export class Tab1Page {

  constructor() {}

}
