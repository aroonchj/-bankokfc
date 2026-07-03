/* =========================================================================
   ตั้งค่า Firebase สำหรับระบบ "นักกีฬา" ของบ้านคอก เอฟซี
   ทำตามคู่มือ "วิธีตั้งค่า Firebase.txt" ที่แนบมาในไฟล์ดาวน์โหลด
   แล้วนำค่าที่ได้มาใส่แทนที่ข้อความ YOUR_XXX ด้านล่างนี้
   ========================================================================= */

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

/* รหัสผ่านแอดมิน สำหรับเพิ่ม/ลบนักกีฬา
   เปลี่ยนเป็นรหัสของคุณเอง แล้วนำรหัสเดียวกันไปใส่ใน Firestore Rules ด้วย
   (ดูขั้นตอนในคู่มือ ข้อ 4) */
const ADMIN_PIN = "bankok6fc2569";

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
