import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ChatService, Message, User } from '../../services/chat.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class ChatRoomPage implements OnInit {

  user!: User;
  messages: Message[] = [];
  newMessage = '';
  currentUserId = 99; // ID de "moi-même" (par défaut)

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private router: Router
  ) {}

  ngOnInit() {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.chatService.getUserById(userId)!;
    this.messages = this.chatService.getMessages(userId); // Tous les messages entre moi et lui
  }

  sendMessage() {
    if (this.newMessage.trim().length > 0) {
      // Envoie mon message
      this.chatService.sendMessage(this.user.id, this.newMessage.trim(), this.currentUserId);

      // Recharge la liste complète des messages après envoi
      this.messages = this.chatService.getMessages(this.user.id);

      // Vider l'input
      this.newMessage = '';
    }
  }

  goToUserProfile() {
    this.router.navigate(['/tabs/tab3', this.user.id]);
  }
  
}
