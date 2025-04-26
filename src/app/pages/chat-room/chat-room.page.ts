import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService, Message, User } from '../../services/chat.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
  imports:[IonicModule,CommonModule,FormsModule]
})
export class ChatRoomPage implements OnInit {

  user!: User;
  messages: Message[] = [];
  newMessage = '';
  currentUserId = 99; // ID de "moi-même" (par défaut)

  constructor(private route: ActivatedRoute, private chatService: ChatService) { }

  ngOnInit() {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.chatService.getUserById(userId)!;
    this.messages = this.chatService.getMessages(userId);
  }

  sendMessage() {
    if (this.newMessage.trim().length > 0) {
      this.chatService.sendMessage(this.user.id, this.newMessage.trim(), this.currentUserId);
      this.newMessage = '';
    }
  }
}
