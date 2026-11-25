import { customFilter, customMap, customReduce } from './utils.js';

async function getPostData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // 1. استخدام customFilter لجلب البوستات التي عنوانها أقل من 25 حرفاً
    const filteredPosts = customFilter(data);
    console.log("Custom Filtered Posts (Title < 25 chars):", filteredPosts);

    // 2. استخدام customMap لاستخراج العناوين فقط في مصفوفة جديدة
    const titles = customMap(filteredPosts, (post) => post.title);
    console.log("Mapped Titles:", titles);

    // 3. استخدام customReduce لحساب مجموع عدد الحروف لجميع هذه العناوين
    const totalChars = customReduce(titles, (sum, title) => sum + title.length, 0);
    console.log("Total Characters in Filtered Titles:", totalChars);
    
  } catch (error) {
    console.error("AJAX Request Failed:", error);
  }
}

getPostData();
