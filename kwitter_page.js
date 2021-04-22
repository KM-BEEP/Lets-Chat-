//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCud_3MXeIBH6QkQ9o44oTiiriyXzjlrZ0",
      authDomain: "kwitter-89f23.firebaseapp.com",
      databaseURL: "https://kwitter-89f23-default-rtdb.firebaseio.com",
      projectId: "kwitter-89f23",
      storageBucket: "kwitter-89f23.appspot.com",
      messagingSenderId: "93786733302",
      appId: "1:93786733302:web:98be3b386213a773214ad7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)


user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send(){
msg=document.getElementById("msg").value
firebase.database().ref(room_name).push({
 username:user_name,
 message:msg,
 like:0
})
document.getElementById("msg").value=""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code
console.log(firebase_message_id)
console.log(message_data)
username=message_data['username']
message = message_data['message']
likes=message_data['like']
name_tag = "<h4>"+username+"<img src='tick.png' class = 'user_tick'></h4>"
msg = "<h4 class = 'message_h4'>"+message+"</h4>"
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + likes + " onclick='updateLike(this.id)'>";
        
        
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + likes + "</span></button><hr>";
        row = name_tag +msg + like_button + span_with_tag
        document.getElementById ("output").innerHTML+=row
//End code
      } });  }); }
getData();
function logout (){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
      }
      function updateLike(message_id){
console.log ("clickedonlikebutton- ="+ message_id)
button_id=message_id;
likes= document.getElementById(button_id).value;
updateLike=Number(likes)+1
console.log(updateLike)
firebase.database().ref(room_name).child(message_id).update({
      like:updateLike
}

)

      }

      
