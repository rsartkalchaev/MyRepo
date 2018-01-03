var config = {
    apiKey: "AIzaSyBwEG0E1Ip7Hd9pyUZWA2TpBb7rJJarxPw",
    authDomain: "contactform1-f1bda.firebaseapp.com",
    databaseURL: "https://contactform1-f1bda.firebaseio.com",
    projectId: "contactform1-f1bda",
    storageBucket: "contactform1-f1bda.appspot.com",
    messagingSenderId: "552464302453"
  };
  firebase.initializeApp(config);

  var messageRef = firebase.database().ref('messages');

  function Firebasedata(){
 //   messageRef.once('value', function(snapshot){
  //   snapshot.forEach(function(childSnapshot){
  //     var childKey = childSnapshot.key;
   //    var childData = childSnapshot.val();
  //   })
   // })
   // console.log(messageRef);
   // ;}
   tbl = document.querySelector('#demo');
    messageRef.on("child_added", function(snapshot, prevChildKey) {
      
       var newMessage = snapshot.val();
       var row = tbl.insertRow(tbl.length);
              row.insertCell(0).innerHTML = newMessage.name;
              row.insertCell(1).innerHTML = newMessage.email;
              row.insertCell(2).innerHTML = newMessage.subject;
              row.insertCell(3).innerHTML = newMessage.message;
      // document.getElementById("demo").innerHTML = 
       
       //'<tr><td>'+newMessage.name+'</td><td>'+newMessage.email+'</td><td>'+newMessage.subject+'</td><td>'+newMessage.message+'</td></td>';
       console.log(newMessage);
     
     
      });
      };
  