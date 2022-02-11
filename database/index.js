import { initializeApp,getApps,getApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
let app

if(!getApps.length){

    app = initializeApp({
        apiKey:process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
        authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
}else{
    app = getApp()
}

export const auth = getAuth(app)
export const database = getFirestore(app)