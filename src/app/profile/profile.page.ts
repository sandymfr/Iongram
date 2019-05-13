import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userPosts

  constructor(private afstore: AngularFirestore,
    private user: UserService) {
    const posts = afstore.doc(`users/${user.getUID()}`)
    this.userPosts = posts.valueChanges()
   }

  ngOnInit() {
  }

}
