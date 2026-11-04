async function getPostData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    
    // التحقق من نجاح الاتصال
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // تحويل الاستجابة إلى JSON
    console.log("AJAX Response Data:", data);
    // يمكنك تحديث محتوى الصفحة هنا
    
  } catch (error) {
    console.error("AJAX Request Failed:", error);
  }
}

// استدعاء الدالة لتنفيذ الطلب
getPostData();