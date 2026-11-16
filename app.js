import { customFilter } from './utils.js';

async function getPostData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // استخدام الدالة المخصصة التي صنعناها في utils.js
    const filteredPosts = customFilter(data);

    console.log("Custom Filtered Posts (Title < 25 chars):", filteredPosts);

  } catch (error) {
    console.error("AJAX Request Failed:", error);
  }
}

getPostData();
