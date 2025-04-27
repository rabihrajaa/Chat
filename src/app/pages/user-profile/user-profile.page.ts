import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChatService, User } from '../../services/chat.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
  imports:[IonicModule,CommonModule,RouterModule]
})
export class UserProfilePage implements OnInit {

  user!: User;

  constructor(private route: ActivatedRoute, private chatService: ChatService) { }

  ngOnInit() {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.chatService.getUserById(userId)!;
  }
}
