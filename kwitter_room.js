
//ADD YOUR FIREBASE LINKS HERE

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
    firebase.initializeApp(firebaseConfig)

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
