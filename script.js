// script.js

// Object holding content for each section
const contentData = {
  about: "<h2>About</h2><p>This is the About section content.</p>",
  artwork: "<h2>Artwork</h2><p>This is the Artwork section content.</p>",
  curatorial:
    "<h2>Curatorial Work</h2><p>This is the Curatorial Work section content.</p>",
  facilitation:
    "<h2>Creative Facilitation</h2><p>This is the Creative Facilitation section content.</p>",
  web: "<h2>Web & Software Design</h2><p>This is the Web & Software Design section content.</p>",
};

// Function to load content dynamically
document.querySelectorAll("[data-content]").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const contentKey = this.getAttribute("data-content");
    const contentDiv = document.getElementById("content");

    // Update the content div with the selected section's content
    contentDiv.innerHTML = contentData[contentKey];
  });
});
