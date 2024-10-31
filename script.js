// script.js

// Object holding content for each section
const contentData = {
  about:
    "<h2>About</h2><p>I’m an artist and curator deeply passionate about the intricate expressions of human faces—sometimes distorted—and the beauty of the natural world. My creative journey is inspired by the interplay between women, femininity, and nature, recognizing their profound interconnectedness. I believe that the woman’s form is an integral part of nature, allowing me to craft pieces that embody a holistic narrative, weaving together these three elements into a cohesive whole. Art is not just my profession; it’s my calling. I am dedicated to continuous learning and creative exploration, always seeking new ways to expand my artistic repertoire. Through my work, I strive to share my vision and connect with a wider audience, hosting exhibitions that showcase my creations and reflect my evolving perspective. Recent curatorial experiences at Babylon Arts and the Norwich & Norfolk Festival have enriched my understanding of cultural programming. I co-curated multiple exhibitions, handling everything from artist selection to installation, ensuring that every aspect met high standards. My current role as a gallery assistant further immerses me in the art community, where I support operational needs and engage with the public. My educational background includes a Gold Arts Award from Trinity College London, along with several certificates in graphic design, marketing, and web development. These qualifications complement my practical experience and have equipped me with strong organizational skills. Whether planning workshops or coordinating events, I thrive on turning creative visions into reality. I am particularly passionate about fostering diversity and inclusion in the arts. I’ve collaborated with organizations like the RNIB on the Sensing Nature exhibition to create accessible experiences for visually impaired visitors. Additionally, I’ve led workshops for individuals who have been excluded from mainstream education, emphasizing the importance of creativity as a means of empowerment and expression.  In my free time, I enjoy exploring new artistic mediums and engaging with local communities through workshops and projects. My love for art drives me to participate in initiatives that address societal challenges, and I am excited to contribute to innovative programs that make a difference. Thank you for visiting my website! I invite you to explore my work and connect with me as I continue my artistic journey, merging my passion for art with a commitment to inclusivity and community engagement.</p>",
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
