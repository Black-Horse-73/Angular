import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  friends: string[];

  constructor() {
    this.friends = ['Вова', 'Жора', 'Саша', 'Маша']
  }
  deleteFriend(i) {
    this.friends.splice(i, 1)
  }
  addFriend(friendInp) {
    this.friends.push(friendInp.value);
    friendInp.value = '';
  }
}
