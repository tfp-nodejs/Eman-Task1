async function getPostData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // فلترة البوستات بحيث يكون عدد حروف الـ title أقل من 25
    const filteredPosts = data.filter(post => post.title.length < 25);

    console.log("Filtered Posts (Title < 25 chars):", filteredPosts);

  } catch (error) {
    console.error("AJAX Request Failed:", error);
  }
}

getPostData();
