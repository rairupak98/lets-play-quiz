import React,{useEffect} from 'react';
import './App.css';
import Header from './component/header.jsx';
import Routes from './routes';
import * as firebase from "firebase"; 
function App() {
  useEffect(()=>{
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5bi-Wd0ulPBhoZgM2nJHSvrBXPxXjnXs",
  authDomain: "lets-play-quiz-a1a04.firebaseapp.com",
  databaseURL: "https://lets-play-quiz-a1a04.firebaseio.com",
  projectId: "lets-play-quiz-a1a04",
  storageBucket: "lets-play-quiz-a1a04.appspot.com",
  messagingSenderId: "821976491003",
  appId: "1:821976491003:web:6a37de9dbfb3dd61b7215e",
  measurementId: "G-GNVE1Q9Q10"
};
firebase.initializeApp(firebaseConfig)
  },true)
  return (
    <>
      <Header/> 
      <Routes/>
      </>
  );
}

export default App;


// ^(\s)*$\n
		