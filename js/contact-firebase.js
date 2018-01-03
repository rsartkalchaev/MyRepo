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
						e.preventDefault();
												
             alert('yepp');
          };

