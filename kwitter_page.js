//YOUR FIREBASE LINKS


user_name=localStorage.getItem("user")
room_name=localStorage.getItem("room_name")


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



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();




function send(){
      message = document.getElementById("messages").value
      firebase.database().ref(room_name).push({
            name : user_name,
            msg : message,
            likes : 0
      });

      document.getElementById("messages").value=""
}

function logout(){
      localStorage.removeItem("user")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
