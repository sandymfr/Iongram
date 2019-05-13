import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


interface user {
    username: string,
    uid: string
}

@Injectable()

export class UserService {
    private user: user

    constructor(private afAuth: AngularFireAuth) {

    }

    setUser(user: user) {
        this.user = user
    }

    getUID() {
        if(!this.user) {
            if(this.afAuth.auth.currentUser) {
                const user = this.afAuth.auth.currentUser
                this.setUser({
                    username: user.email.split('@')[0], //separa o usuario do @email criado
                    uid: user.uid
                })
                return user.uid
            } else {
                throw new Error("Usuario nao esta logado")
            } 
        } else {
                return this.user.uid
            }
        }
    }
