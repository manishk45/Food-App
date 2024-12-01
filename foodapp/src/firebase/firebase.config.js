import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,

  //   apiKey: "AIzaSyDboA8edCFDrKmDcX-bKijkZ6SklcYuguQ",
  //   authDomain: "desiqna-foodapp.firebaseapp.com",
  //   projectId: "desiqna-foodapp",
  //   storageBucket: "desiqna-foodapp.appspot.com",
  //   messagingSenderId: "323792364745",
  //   appId: "1:323792364745:web:19b62b0a9879063f661918",
};
console.log("Firebase Config:", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
