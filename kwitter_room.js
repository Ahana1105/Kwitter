
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDBoGBWOZ08wp_WnE2XQeK-tL9L4GFAcKI",
      authDomain: "ahana-s-kwitter-14043.firebaseapp.com",
      databaseURL: "https://ahana-s-kwitter-14043-default-rtdb.firebaseio.com",
      projectId: "ahana-s-kwitter-14043",
      storageBucket: "ahana-s-kwitter-14043.appspot.com",
      messagingSenderId: "17288553876",
      appId: "1:17288553876:web:e61f6f083f6e7249ff9b81",
      measurementId: "G-EBR7SX5J23"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
    username = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function add_room() {
      add_room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(add_room_name).update({
            purpose : "add_room_name"
      });
      localStorage.setItem("room_name", add_room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id="+ Room_names + " onclick='redirect_to_room_name(this.id)' > #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirect_to_room_name(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}