//YOUR FIREBASE LINKS

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


var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(message_data);
userName = message_data['Name'];
message = message_data['Message'];
like = message_data['Like'];

name_with_tag = "<h4>" + userName + "<img src='tick.png' class='user_tick'> </h4>" ;
message_with_tag = "<h4 class='message_h4' >" + message + "</h4>";
like_button = "<button class='btn btn-info' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)' >";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like : "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send() {
 msg_value = document.getElementById("input_send_msg").value;

 firebase.database().ref(room_name).push ({
       Name : user_name,
       Message : msg_value,
       Like : 0
 });

 document.getElementById("input_send_msg").value = "";

}

function updateLike(message_id) { 
      button_id = message_id;
      likes= document.getElementById(button_id).value;
      updateLike = Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            Like : updateLike
      }
      );
}