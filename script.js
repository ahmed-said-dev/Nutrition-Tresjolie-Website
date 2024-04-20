document.addEventListener("DOMContentLoaded", function () {
    
    const posts = [
        { title: "Post 1", description: "Description for post 1", image: "./blog-posts/post1.png" },
        { title: "Post 2", description: "Description for post 2", image: "./blog-posts/post2.png" },
        { title: "Post 1", description: "Description for post 1", image: "./blog-posts/post1.png" },
        { title: "Post 2", description: "Description for post 2", image: "./blog-posts/post2.png" },
        { title: "Post 1", description: "Description for post 1", image: "./blog-posts/post1.png" },
        { title: "Post 2", description: "Description for post 2", image: "./blog-posts/post2.png" },
        
    ];

    const blogContainer = document.getElementById("blog");

    
    function addPost(post) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <img src="${post.image}" alt="${post.title}" >
            <p>${post.description}</p>
        `;

        blogContainer.appendChild(postElement);
    }

    
    posts.forEach(addPost);
});
