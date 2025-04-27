  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDaDzTFJV-f_byjVvcDodvTPROCm7cavdU",
    authDomain: "foodpapa-88a60.firebaseapp.com",
    projectId: "foodpapa-88a60",
    storageBucket: "foodpapa-88a60.appspot.com", // .appspot.com والا ڈومین
    messagingSenderId: "871134341008",
    appId: "1:871134341008:web:0eb13e39b45e45a4537515"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


 




window.handlesignup = () => {
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
  
    // ویلیڈیشن چیکس
    if (!email || !password) {
      Swal.fire("Error", "Email/Password cannot be empty", "error");
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => Swal.fire("Success!", "Account Created!", "success"))
      .catch((error) => Swal.fire("Error", error.message, "error"));
  };
    



