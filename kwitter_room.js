
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDMoGObDZ5pzkJ8kpUzhw0ZSYaCji1T4Eg",
  authDomain: "school-chat-4e8af.firebaseapp.com",
  databaseURL: "https://school-chat-4e8af-default-rtdb.firebaseio.com",
  projectId: "school-chat-4e8af",
  storageBucket: "school-chat-4e8af.appspot.com",
  messagingSenderId: "997603978614",
  appId: "1:997603978614:web:3103c665d1f07a34219e57"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    function userNamez() {
      var user_Name =  localStorage.getItem("user")
      firebase.database().ref("/").child(localStorage.getItem("user")).update({
        USER: user_Name
   });
 }

 userNamez()



