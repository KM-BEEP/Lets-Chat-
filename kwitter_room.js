
//ADD YOUR FIREBASE LINKS HERE
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

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+username

function add_room()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room"
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row = "<div class='room_name' id = "+Room_names+"  onclick = 'RedirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML+=row     
       //End code
      });});}
getData();

function RedirectToRoomName(name){
      console.log(name)
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html"
}
function logout (){
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"
}
