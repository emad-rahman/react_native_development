import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'
const config = {
    apiKey: "AIzaSyDXAOQJzJ4RVXLZmHIyy5m6WN_l3nlVQTE",
    authDomain: "dinder-e4ad2.firebaseapp.com",
    databaseURL: "https://dinder-e4ad2.firebaseio.com",
    storageBucket: "dinder-e4ad2.appspot.com",
    messagingSenderId: "672251296760"
}
export default class SettingsStore extends MobxFirebaseStore{
    constructor(){
        firebase.initializeApp(config)
        super(firebase.database().ref())

        this.splashTime = 5000
        this.splashImg = require('../../images/splash.jpg')
    }
    get SplashTime(){
        return this.splashTime
    }
    get SplashImg(){
        return this.splashImg
    }
}
