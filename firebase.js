import { signUp, logIn, uploadDrawingImage, saveDrawingMetadata, auth } from './firebase.js';

// Example: Sign up
await signUp("email@example.com", "password123");

// Example: Log in
await logIn("email@example.com", "password123");

// Example: Upload a drawing and save its data
const user = auth.currentUser;
const file = document.getElementById("drawing-input").files[0];
const filename = await uploadDrawingImage(user.uid, file);
await saveDrawingMetadata(filename, user.uid, "My First Drawing");
