import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
    imports:[IonicModule,CommonModule]
})
export class UserProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
