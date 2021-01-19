  document.getElementById("signups").addEventListener('click',regsiterUser);
  document.getElementById("signins").addEventListener('click',signInUser);
  function regsiterUser(e){
      e.preventDefault();
      var registeredName=document.getElementById("registeredName").value;
      var email = document.getElementById("registeredEmail").value;
      var password=document.getElementById("registeredPassword").value;
      console.log(email);
      console.log(password);
      firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        alert("Registered");
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }
  function signInUser(e){
    e.preventDefault();
    var email = document.getElementById("signedMail").value;
    var password=document.getElementById("signedPass").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) =>{
        alert("Signed In");
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      
    });
  }