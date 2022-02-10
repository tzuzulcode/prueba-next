import { initializeApp,getApps,getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
let app

if(!getApps.length){
    app = initializeApp({
        apiKey: process.env.FIREBASE_PUBLIC_API_KEY,
        authDomain:process.env.FIREBASE_AUTH_DOMAIN,
        projectId:process.env.FIREBASE_PROJECT_ID,
    });
}else{
    app = getApp()
}
export const database = getFirestore(app)
export const auth = getAuth(app)