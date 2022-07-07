import { initializeApp } from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,

} from 'firebase/auth';

import {
    getFirestore, 
    doc,
    getDoc, 
    setDoc, 
} from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCbAffL0u4QChL98MSuEIk1Dqb6QqTU7KU",
    authDomain: "crwn-clothing-db-e4683.firebaseapp.com",
    projectId: "crwn-clothing-db-e4683",
    storageBucket: "crwn-clothing-db-e4683.appspot.com",
    messagingSenderId: "372236027196",
    appId: "1:372236027196:web:10c4064f4d6df4af030a39"
  };

const fireBaseApp = initializeApp(firebaseConfig);
const provider    = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"

});

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async ( userAuth ) => {
    
    const userDocRef   = doc( db, 'users',userAuth.uid );
    const userSnapshot = await getDoc( userDocRef );
    console.log(userSnapshot);
    console.log(userSnapshot.exists);

    if( !userSnapshot.exists() ){

        const { displayName, email} = userAuth;
        const createdAt = new Date(); 
        try{
            await setDoc( userDocRef,{
                displayName, 
                email, 
                createdAt
            });
        } catch( error ) {
            console.log( 'error creating the user', error.message )

        }
    }

}