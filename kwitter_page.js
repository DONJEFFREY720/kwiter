//YOUR FIREBASE LINKS


user_name=localStorage.getItem("user")
room_name=localStorage.getItem("room_name")


var firebaseConfig = {
      apiKey: "AIzaSyAZcb3Fjrsh0ybOOXC6ZkNBRFucbZBepSU",
      authDomain: "twitter2-d4b6d.firebaseapp.com",
      databaseURL: "https://twitter2-d4b6d-default-rtdb.firebaseio.com",
      projectId: "twitter2-d4b6d",
      storageBucket: "twitter2-d4b6d.appspot.com",
      messagingSenderId: "290799928667",
      appId: "1:290799928667:web:8959d0c02c19d59ccc867e"
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