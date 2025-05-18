<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovArt</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
        }
    </style>
    <link rel="shortcut icon" href="./images/novart-logo.png" type="image/x-icon">
</head>
<body class="bg-gray-50">
    <!-- Firebase SDKs -->
    <script type="module">
        // Import the functions you need from the SDKs
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
        import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAgZykAePaI9ZsW2MlW1033stey-50NEyo",
            authDomain: "fir-5280d.firebaseapp.com",
            projectId: "fir-5280d",
            storageBucket: "fir-5280d.firebasestorage.app",
            messagingSenderId: "805352677640",
            appId: "1:805352677640:web:585bc14ead69e7ad968cbd"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        // Auth Logic Example
        window.register = () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            createUserWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    alert('Registered!');
                })
                .catch(error => {
                    alert(error.message);
                });
        }

        window.login = () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            signInWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    alert('Logged in!');
                })
                .catch(error => {
                    alert(error.message);
                });
        }
    </script>

    <!-- Login/Register UI -->
    <div class="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow">
        <h2 class="text-2xl font-bold text-center mb-6">Welcome to NovArt</h2>
        <input id="email" type="email" placeholder="Email" class="w-full p-2 mb-4 border rounded">
        <input id="password" type="password" placeholder="Password" class="w-full p-2 mb-4 border rounded">
        <button onclick="register()" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-2">Register</button>
        <button onclick="login()" class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Login</button>
    </div>
</body>
</html>
