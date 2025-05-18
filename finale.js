<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NovArt Login</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
  <style>
    body {
      font-family: 'Poppins', sans-serif;
    }
  </style>
</head>
<body class="bg-gray-100">
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">NovArt Login</h2>

      <div id="auth-container">
        <input id="email" type="email" placeholder="Email" class="w-full mb-4 p-2 border rounded" />
        <input id="password" type="password" placeholder="Password" class="w-full mb-4 p-2 border rounded" />

        <button onclick="login()" class="w-full bg-blue-600 text-white p-2 rounded mb-2 hover:bg-blue-700">Login</button>
        <button onclick="signup()" class="w-full bg-gray-300 p-2 rounded hover:bg-gray-400">Sign Up</button>

        <p id="message" class="mt-4 text-center text-sm text-red-500"></p>
      </div>
    </div>
  </div>

  <!-- Firebase App (the core Firebase SDK) -->
  <script type="module">
    // Import the functions you need from the SDKs
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

    // Your Firebase config (Replace with your real Firebase project config)
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT.firebaseapp.com",
      projectId: "YOUR_PROJECT",
      storageBucket: "YOUR_PROJECT.appspot.com",
      messagingSenderId: "1234567890",
      appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    window.login = function () {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          document.getElementById("message").textContent = "Logged in successfully!";
        })
        .catch(error => {
          document.getElementById("message").textContent = error.message;
        });
    }

    window.signup = function () {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          document.getElementById("message").textContent = "Signup successful! Now log in.";
        })
        .catch(error => {
          document.getElementById("message").textContent = error.message;
        });
    }
  </script>
</body>
</html>
