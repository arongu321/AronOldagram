const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        alt: "A headshot painting of Vincent van Gogh.",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        alt: "A painting of Gustave Courbet looking stressed.",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        alt: "A painting of Joseph Ducreux pointing at you.",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Function to render posts dynamically
const renderPosts = () => {
    const mainContainer = document.querySelector(".posts")

    // For all posts listed above
    posts.forEach(post => {
        // Create post container
        const postSection = document.createElement("section");
        postSection.classList.add("post");

        // Create header
        const header = document.createElement("div");
        header.classList.add("post-header");
        header.innerHTML = `
            <img class="avatar move-left" src="${post.avatar}" alt="${post.name}">
            <div class="name-location">
                <p class="name">${post.name}</p>
                <p class="location">${post.location}</p>
            </div>
        `;

        // Create post image
        const postImage = document.createElement("img");
        postImage.classList.add("post-image");
        postImage.src = post.post;
        postImage.alt = `${post.alt}`;

        // Create footer
        const footer = document.createElement("div");
        footer.classList.add("post-footer");
        footer.innerHTML = `
            <div class="icons move-left">
                <img class="icon icon-heart" src="images/icon-heart.png">
                <img class="icon" src="images/icon-comment.png">
                <img class="icon" src="images/icon-dm.png">
            </div>
            <p class="likes move-left"><strong>${post.likes} likes</strong></p>
            <p class="comments move-left"><strong>${post.username}</strong> ${post.comment}</p>
            <div class="bottom-border">
            </div>
        `;

        // Append all elements to post container
        postSection.appendChild(header);
        postSection.appendChild(postImage);
        postSection.appendChild(footer);

        // Append post container to the main container
        mainContainer.appendChild(postSection);

    });

    addHeartClickListeners();
};

// Function to add click event listeners to heart icons
const addHeartClickListeners = () => {
    const heartIcons = document.querySelectorAll(".icon-heart");

    heartIcons.forEach(icon => {
        icon.addEventListener("dblclick", function (event) {
            const clickedIcon = event.target;

            // Find the likes element related to this icon
            const likesElement = clickedIcon.closest(".post-footer").querySelector(".likes");
            const currentLikes = parseInt(likesElement.textContent); // Get the current number of likes

            // Toggle the heart icon image source
            if (icon.src.includes("icon-heart.png")) {
                icon.src = "images/heart.png"; // Change to red heart
                likesElement.textContent = `${currentLikes + 1} likes`; // Increment likes
            } else {
                icon.src = "images/icon-heart.png"; // Change back to white heart
                likesElement.textContent = `${currentLikes - 1} likes`; // Decrement likes
            }
        });
    });
};

// Call the renderPosts function
renderPosts();