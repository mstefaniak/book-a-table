import { createContext } from "react";
import Firebase from "firebase/app";

type FirebaseContextType = {
  firebase: Firebase.app.App;
};

export const FirebaseContext = createContext<FirebaseContextType | null>(null);
