import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
  imports:[IonicModule]
})
export class ChatRoomPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
