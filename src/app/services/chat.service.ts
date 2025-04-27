import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface Message {
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // Liste d'utilisateurs statique
  private users: User[] = [
    { id: 1, name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Bob', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Charlie', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 99, name: 'Moi', avatar: 'https://i.pravatar.cc/150?img=4' } // toi-même
  ];

  // Messages statiques existants
  private messages: Message[] = [
    {
      senderId: 1,
      receiverId: 99,
      content: 'Salut, comment ça va ?',
      timestamp: new Date(new Date().getTime() - 600000) // il y a 10 minutes
    },
    {
      senderId: 99,
      receiverId: 1,
      content: 'Salut Alice, je vais bien et toi ?',
      timestamp: new Date(new Date().getTime() - 550000) // il y a 9 min 10 sec
    },
    {
      senderId: 2,
      receiverId: 99,
      content: 'Es-tu disponible pour un appel ?',
      timestamp: new Date(new Date().getTime() - 300000) // il y a 5 minutes
    },
    {
      senderId: 99,
      receiverId: 2,
      content: 'Oui bien sûr, je suis prêt !',
      timestamp: new Date(new Date().getTime() - 250000) // il y a 4 min 10 sec
    }
  ];

  constructor() { }

  // Retourne tous les utilisateurs
  getUsers(): User[] {
    return this.users;
  }

  // Trouve un utilisateur par son id
  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // Récupère tous les messages échangés entre l'utilisateur connecté (99) et un autre utilisateur
  getMessages(userId: number): Message[] {
    return this.messages.filter(
      m => (m.senderId === userId && m.receiverId === 99) ||
           (m.senderId === 99 && m.receiverId === userId)
    );
  }

  // Envoie un message
  sendMessage(receiverId: number, content: string, senderId: number) {
    this.messages.push({
      senderId,
      receiverId,
      content,
      timestamp: new Date()
    });
  }
}
