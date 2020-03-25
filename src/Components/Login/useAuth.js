import React, { useContext, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState, createContext } from "react";

firebase.initializeApp(firebaseConfig);

// creating context

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}

const getUser = user => {
  const { displayName, email, photoURL } = user;
      return { name: displayName, email, photo: photoURL };
}


const Auth = () => {
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
       
        const signedInUser = getUser(res.user);
        setUser(signedInUser);
        return res.user;
      })
      .catch(err => {
        console.log(err);
        setUser(null);
        return err.message;
      });
  };

  //sign out function

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        setUser(null);
      })
      .catch(function(error) {});
  };



 
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user){
      if(user){

        const currentUser = getUser(user);
        setUser(currentUser);
        
      }else{
        //NO user signed in
      }
    });
  }, [])

  return {
    user,
    signInWithGoogle,
    signOut
  };
};

export default Auth;
