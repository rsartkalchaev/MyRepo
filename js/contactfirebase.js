var config = {
    apiKey: "AIzaSyBwEG0E1Ip7Hd9pyUZWA2TpBb7rJJarxPw",
    authDomain: "contactform1-f1bda.firebaseapp.com",
    databaseURL: "https://contactform1-f1bda.firebaseio.com",
    projectId: "contactform1-f1bda",
    storageBucket: "contactform1-f1bda.appspot.com",
    messagingSenderId: "552464302453"
  };
  firebase.initializeApp(config);

  var messageRef = firebase.database().ref('messages')
  
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
                      //SubmitForm
                      function submitForm(e){
                          e.preventDefault();
                          
                          //Get Values
                          var name = getInputVal('name');
                          var email = getInputVal('email');
                          var subject = getInputVal('subject');
                          var message = getInputVal('message');
                          //console.log(name+' '+email+' '+subject+' '+message);
                          saveMessage(name, email, subject, message);
                          //Clear Form
                          document.getElementById('contactForm').reset();
                          
                         
                          }
                          function getInputVal(id){
                            return document.getElementById(id).value;
                          }
                          //Save message
                          function saveMessage(name, email, subject, message){
                              var newMessageRef = messageRef.push();
                              newMessageRef.set({
                                  name:name,
                                  email:email,
                                  subject:subject,
                                  message:message
                              });
                        } 

    