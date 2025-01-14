import axios from 'axios';//

// הגדרת כתובת הבסיס ל-API
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL, 
  headers: {
    "Content-Type": "application/json", // הגדרת כותרת ברירת מחדל
  },
});

// הוספת interceptor לטיפול בשגיאות
apiClient.interceptors.response.use(
    (response) => {
      // אם הבקשה הצליחה, פשוט החזיר את ה-response
      return response;
    },
    (error) => {
      // אם יש שגיאה, רושם ללוג ומחזיר שגיאה
      console.error("API Error:", {
        url: error.config?.url,
        method: error.config?.method,
        status: error.response?.status,
        data: error.response?.data,
      });
  
      // אם רוצים לטפל בשגיאה בצורה גלובלית (לדוגמה: הודעה למשתמש)
      if (error.response?.status === 500) {
        console.error("Server error occurred. Please try again later.");
      } else if (error.response?.status === 404) {
        console.error("Resource not found.");
      }
  
      // זריקת השגיאה כך שהקריאה תוכל לטפל בה בעצמה
      return Promise.reject(error);
    }
  );
  
  export default apiClient;
