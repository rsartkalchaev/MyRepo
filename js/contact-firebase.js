  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAnsLR0tKmcqFcsX3TUscrdqtZrT9eOMkk",
    authDomain: "contacts-29f6c.firebaseapp.com",
    databaseURL: "https://contacts-29f6c.firebaseio.com",
    projectId: "contacts-29f6c",
    storageBucket: "",
    messagingSenderId: "583234640955"
  };
  firebase.initializeApp(config);

  var messageRef = firebase.database().ref('messages');

  document.getElementById('contactForm').addEventListener('submit',submitForm);
  document.getElementById('getData').addEventListener('click',getData);

					//SubmitForm
					function submitForm(e){
						e.preventDefault();
						
						//GetValues
						var name = getInputVal('name');
						var email = getInputVal('email');
						var subject = getInputVal('subject');
						var message = getInputVal('message');

						//console.log(name+' '+email+' '+subject+' '+message);

						SaveMessage(name,email,subject,message);
						
						//Clear Form
            document.getElementById('contactForm').reset();
                        
          };

          function getInputVal(id){
            return document.getElementById(id).value;
          }
          
          //Save Message
          function SaveMessage(name,email,subject,message){
            var newMessageRef = messageRef.push();
            newMessageRef.set({
              name: name,
              email: email,
              subject: subject,
              message: message
            });
          }

          //Get Data
          function getData(e){
          //	e.preventDefault();
          tbl = document.querySelector('#tbl');
          var th = tbl.insertRow(tbl.length);
          th.insertCell(0).innerHTML = 'Name';
          th.insertCell(1).innerHTML = 'Email';
          th.insertCell(2).innerHTML = 'Subject';
          th.insertCell(3).innerHTML = 'Message';
						messageRef.on("child_added", function(snapshot, prevChildKey) {
              var newMessage = snapshot.val();
              var row = tbl.insertRow(tbl.length);
              row.insertCell(0).innerHTML = newMessage.name;
              row.insertCell(1).innerHTML = newMessage.email;
              row.insertCell(2).innerHTML = newMessage.subject;
              row.insertCell(3).innerHTML = newMessage.message;
              //alert('asdfasdf'); 
               /*  console.log("Name: " + newMessage.name);
                console.log("Email: " + newMessage.email);
                console.log("Subject: " + newMessage.subject);
                console.log("Message: " + newMessage.message); */

              /* tbl = document.querySelector('#tbl');
              newMessage.items.forEach(function (element) {
              var row = tbl.insertRow(tbl.length);
              row.insertCell(0).innerHTML = element.name;
              row.insertCell(1).innerHTML = element.email;
              alert('asdfasdf'); 
              })*/

              },
              function (errorObject) {
                console.log("The read failed: " + errorObject.code);
                
              
              //var newWin = window.open('/contactTable.html');

              
            });
          };

