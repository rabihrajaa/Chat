import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface Message {
  senderId: number;
  content: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private users: User[] = [
    { id: 1, name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Bob', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Charlie', avatar: 'https://i.pravatar.cc/150?img=3' }
  ];

  private messages: { [key: number]: Message[] } = {};

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getMessages(userId: number): Message[] {
    if (!this.messages[userId]) {
      this.messages[userId] = [];
    }
    return this.messages[userId];
  }

  sendMessage(userId: number, messageContent: string, senderId: number) {
    if (!this.messages[userId]) {
      this.messages[userId] = [];
    }
    this.messages[userId].push({
      senderId,
      content: messageContent,
      timestamp: new Date()
    });
  }
}
