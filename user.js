

function main() {
    const userId = localStorage.getItem("id");
    showPosts(userId)
}

async function showPosts(id) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postsData = await posts.json();
    console.log(postsData)
    const postListHtml = document.querySelector('.post-list');
    postListHtml.innerHTML = postsData.map((post) => generatePost(post)).join('');
}

function generatePost(post) {
    return `<div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`
}


function onSearchChange(event) {
    showPosts(event.target.value);
}

main();