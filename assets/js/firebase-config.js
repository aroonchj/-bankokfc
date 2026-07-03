const firebaseConfig = {
  apiKey: "AIzaSyCkOsU-m7hMWNoHqD9oeBjBgcI_HywPFvQ",
  authDomain: "bankok-fc.firebaseapp.com",
  projectId: "bankok-fc",
  storageBucket: "bankok-fc.firebasestorage.app",
  messagingSenderId: "534844237973",
  appId: "1:534844237973:web:48ae2188761ff4acd4939c"
};

const ADMIN_PIN = "bankok6fc2569";

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();