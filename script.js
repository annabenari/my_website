// script.js

// Object holding content for each section
const contentData = {
  about: `
    <h2>About</h2>
    <img class="me" src="/me.png" alt="A portrait of me, brown hair, blue top">
    <p>
      I am an artist and curator deeply passionate about the intricate expressions of human faces—sometimes distorted—and the beauty of the natural world. My creative journey is inspired by the interplay between women, femininity, and nature, recognizing their profound interconnectedness. I believe that the woman’s form is an integral part of nature, allowing me to craft pieces that embody a holistic narrative, weaving these three elements into a cohesive whole.
    </p>
    <p>
      Dedicated to continuous learning and creative exploration, I am always seeking new ways to expand my artistic repertoire. Through my work, I strive to connect with a wider audience, hosting exhibitions that reflect my evolving perspective. Recent curatorial experiences at Babylon Arts and the Norwich & Norfolk Festival have enriched my understanding of cultural programming. I co-curated multiple exhibitions, managing artist selection, installation, and ensuring high standards throughout.
    </p>
    <p>
      My role as a Duty Manager and Marketing Assistant at Babylon Arts immerses me in the art community, where I support operations and engage with the public. I hold a Gold Arts Award from Trinity College London and certificates in graphic design, marketing, and web development. These complement my practical experience, equipping me with strong organizational skills. Whether planning workshops or coordinating events, I thrive on bringing creative visions to life, with a focus on fostering diversity and inclusion in the arts.
    </p>
    <p>
      I’ve collaborated with organizations like the RNIB on the Sensing Nature exhibition to create accessible experiences for visually impaired visitors. I have also led workshops for individuals excluded from mainstream education, emphasizing creativity as a means of empowerment and expression.
    </p>
    <p>
      In my free time, I explore new artistic mediums and engage with local communities through workshops and projects. My love for art drives me to participate in initiatives that address societal challenges. I have conducted workshops with institutions such as the <a class="links" href="https://www.wysingartscentre.org/" target="_blank">Wysing Art Centre</a>, the <a class="links" href="https://fitzmuseum.cam.ac.uk/" target="_blank">Fitzwilliam Museum</a>, <a class="links" href="https://www.elymuseum.org.uk/" target="_blank">Ely Museum</a>, Ely Market, and Fermynwoods, enriching my practice and deepening my commitment to inclusivity and community engagement.
    </p>
    <p>
      Thank you for visiting my website! I invite you to explore my work and connect with me as I continue my artistic journey, merging my passion for art with meaningful community involvement.
    </p>
  `,
  artwork: `
    <h2>Artwork</h2>
    <img class="images" src="../art_work/wine.png" >
    <img class="images" src="../art_work/flower.png" >
    <img class="images" src="../art_work/1.png" alt="Flower prints, bright colors">
    <img class="images" src="../art_work/2.jpeg" alt="Bird's eye view of woman with broken tiled wooden floor painted on a broken white shelf">
    <img class="images" src="../art_work/3.jpg" alt="Man painted with different colors for light, medium, and dark shades on paper with some pencil markings left over">
    <img class="images" src="../art_work/4.png" alt="Life drawing of a lady hunched, holding her head up with her arm while leaning on her knee">
    <img class="images" src="../art_work/5.png" alt="">
    <img class="images" src="../art_work/6.png" alt="">
    <img class="images" src="../art_work/7.png" alt="">
    <img class="images" src="../art_work/8.png" alt="">
    <img class="images" src="../art_work/9.png" alt="">
  `,
  curatorial: `
    <h2>Curatorial Work</h2>
    <p>This is the Curatorial Work section content.</p>
  `,
  facilitation: `
  <section class="facilitation">
  <h2>Creative Facilitation</h2>
    <h4>Print Making Workshop, Wysing Art Centre - November 2024</h4>
    <p>This session was a hands-on workshop focused on creative printmaking with natural elements. Participants explored basic techniques using found objects from nature, encouraging creativity and experimentation in a supportive environment.</p>

    <button class="toggleButton">Pictures</button>
    <div class="imageContainer">
    <img class="wysing-images" src="../wysing-art-centre-1/1.JPG" alt="">
    <img class="wysing-images" src="../wysing-art-centre-1/2.JPG" alt="">
    <img class="wysing-images" src="../wysing-art-centre-1/6.JPG" alt="">
    </div>

    <br>

    <h4>'Play, Build Play', Fitzwilliam Museum - August 2024</h4>
    <p>
      As facilitator of the Summer Play Pavilion, I engaged with families to foster an inviting and playful environment. I guided participants in exploring the curated collection of loose parts, encouraging creative play, collaboration, and the development of their own sporting and cultural activities.
    </p>

    <button class="toggleButton">Pictures</button>
    <div class="imageContainer">
    <img class="play-build-play" src="../play-build-play/1.png" alt="">
    <img class="play-build-play" src="../play-build-play/2.png" alt="">
    <img class="play-build-play" src="../play-build-play/3.png" alt="">
    </div>


  
    </div>
  <br>
    <h4>Fermynwoods</h4>
    <p>
    In the workshop, I guided students through techniques for creating pattern and print, starting with Styrofoam as a base for experimenting with repetition, color, and form. We worked across various fabrics, exploring how each one’s unique texture affected the outcome of the stamps and designs.
    One of the most memorable parts of the day was spent outdoors, gathering leaves, bark, and other natural materials from the woods. We played with inking and printing directly from these found objects onto different fabrics, letting nature influence our designs in unexpected ways. At the end of the session, each student brought their designs together, creating unique prints on tote bags to take home—capturing the spirit of the day in a tangible way.
    </p>
    </section>
    <br>
    <h4>Fitzwilliam Museum - February 2023 </h4>
    <p>
      For SOURCE, I conducted an interactive workshop for GCSE, A-Level, BTEC, and Foundation Art & Design students, introducing them to Tagtool, a digital tool for live, collaborative digital art creation. I demonstrated its features and guided students in a collaborative project, encouraging them to experiment with their own ideas and contribute to the collective artwork.
    </p>
    <br>
    <h4>Ely Museum</h4>
    <p>Info</p>
    <br>
    <h4>Fitzwilliam Museum - February 2022 </h4>
    <p>
      In this SOURCE session, I led a flexible, drop-in visual art curatorial workshop for students to explore and discuss various artistic approaches and inspirations. I also conducted a tote bag printing session, teaching basic printmaking techniques and encouraging students to experiment with composition and color.
    </p>
    <br>
    <h4>Ely Market</h4>
    <p>Info</p>
  `,
  web: `
    <h2>Web & Software Design</h2>
    <p>This is the Web & Software Design section content.</p>
  `,
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

// Function to initialize toggle buttons
function initializeToggleButtons() {
  // Select all toggle buttons
  const toggleButtons = document.querySelectorAll(".toggleButton");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Find the associated image container (next sibling in this case)
      const imageContainer = this.nextElementSibling;

      if (imageContainer) {
        // Toggle visibility of the image container
        if (
          imageContainer.style.display === "none" ||
          imageContainer.style.display === ""
        ) {
          imageContainer.style.display = "block"; // Show the images
          button.textContent = "Hide Images"; // Change button text
        } else {
          imageContainer.style.display = "none"; // Hide the images
          button.textContent = "Show Images"; // Change button text
        }
      }
    });
  });
}

// Attach event listeners to links and dynamically reload content
document.querySelectorAll("[data-content]").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const contentKey = this.getAttribute("data-content");
    const contentDiv = document.getElementById("content");

    // Update the content div with the selected section's content
    contentDiv.innerHTML = contentData[contentKey];

    // Re-initialize toggle buttons for newly added content
    initializeToggleButtons();
  });
});

// Call this function to activate buttons initially
initializeToggleButtons();
