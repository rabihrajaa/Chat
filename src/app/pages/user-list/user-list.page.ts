import { Component, OnInit } from '@angular/core';
import { ChatService, User } from '../../services/chat.service';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
  imports:[IonicModule,CommonModule,RouterModule]
})
export class UserListPage implements OnInit {

  users: User[] = [];

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.users = this.chatService.getUsers();
  }

  openChat(user: User) {
    this.router.navigate(['/chat-room', user.id]);
  }

  viewProfile(user: User) {
    this.router.navigate(['/user-profile', user.id]);
  }
}
