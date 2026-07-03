/* =========================================================================
   ตั้งค่า Firebase สำหรับระบบ "นักกีฬา" ของบ้านคอก เอฟซี
   ทำตามคู่มือ "วิธีตั้งค่า Firebase.txt" ที่แนบมาในไฟล์ดาวน์โหลด
   แล้วนำค่าที่ได้มาใส่แทนที่ข้อความ YOUR_XXX ด้านล่างนี้
   ========================================================================= */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkOsU-m7hMWNoHqD9oeBjBgcI_HywPFvQ",
  authDomain: "bankok-fc.firebaseapp.com",
  projectId: "bankok-fc",
  storageBucket: "bankok-fc.firebasestorage.app",
  messagingSenderId: "534844237973",
  appId: "1:534844237973:web:48ae2188761ff4acd4939c",
  measurementId: "G-893V37HH6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/* รหัสผ่านแอดมิน สำหรับเพิ่ม/ลบนักกีฬา
   เปลี่ยนเป็นรหัสของคุณเอง แล้วนำรหัสเดียวกันไปใส่ใน Firestore Rules ด้วย
   (ดูขั้นตอนในคู่มือ ข้อ 4) */
const ADMIN_PIN = "bankok6fc2569";

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
