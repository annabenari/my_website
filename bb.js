export const bbContent = {
  bb: `<h1>Blossoms & Brushstrokes Exhibition </h1>

  <button class="toggleButton">Call Out and Poster</button>
  <div class="imageContainer">
  <img class="bb" src="../bb/callout.jpg" alt="">
  <img class="bb" src="../bb/poster.jpg" alt="">
  </div>

  <p>
      I created an exhibition titled <strong>"Blossoms & Brushstrokes"</strong>, which featured the work of young emerging artists aged 16-25 from East Anglia, offering them a platform to showcase their artwork and gain valuable exposure. Alongside their work, I exhibited my own pieces, which explored themes of nature, femininity, and human expression, central to my artistic practice.
  </p>


  <p>
      One of the key features of the exhibition was an immersive video room at <strong>Cambridge Artworks</strong>. In this space, visitors could sit and watch a loop of video works, creating an intimate and engaging experience. This part of the exhibition aimed to provide a moment for quiet reflection and interaction with the artwork in a more personal way.
  </p>


  <p>
      To ensure the success of the event, I hired a technician who was also starting out in the art world. This collaboration not only supported the technical side of the exhibition but also provided an opportunity for a budding professional to gain valuable experience. Additionally, I brought in a couple of writers and artists to assist with the event on the preview night. They helped in providing context, engaging with attendees, and facilitating discussions around the works displayed.
  </p>

 
  <p>
      This exhibition was made possible due to the competitive <strong>Bursary from the Norwich & Norfolk Festival</strong>, which I was awarded. This funding allowed me to cover expenses related to the venue, hiring the technician, and supporting the creation of the immersive experience. The bursary played a significant role in making the exhibition more dynamic and accessible to a wider audience, allowing me to offer the artists involved the best possible platform for their work.
  </p>

  
  <p>
      The exhibition was held at <strong>Cambridge Artworks</strong>, a venue that provided a supportive environment for the young artists involved. I also worked closely with the venue to ensure smooth logistics, including artwork installation and exhibition promotion. Through a combination of social media campaigns, local press outreach, and physical marketing materials, I was able to attract a broad audience to the event.
  </p>


  <p>
      My role in this project extended beyond curation. I worked closely with the artists, helping to guide them through the exhibition process and ensuring that their needs were met. I also took on the responsibility of managing communications with the venue, the technician, and all collaborators, ensuring that everything ran smoothly on the day of the event.
  </p>


  <p>
      Overall, <strong>Blossoms & Brushstrokes</strong> was a successful exhibition that not only showcased the work of young artists but also provided a meaningful and engaging experience for the public. It gave me valuable insight into the complexities of curating, managing an exhibition, and fostering collaborative relationships within the art community. The support I received through the Norwich & Norfolk Festival bursary was instrumental in making the event a success, and I look forward to building on this experience in future curatorial projects.
  </p>
  

  <button class="toggleButton">Call Out and Poster</button>
  <div class="imageContainer">
  <img class="bb" src="../bb/callout.jpg" alt="">
  <img class="bb" src="../bb/poster.jpg" alt="">
  </div>

  <div class="image-gallery">
  ${Array.from(
    { length: 42 },
    (_, index) => `
    <a href="#img${index + 1}">
      <img class="bb" src="../bb/${index + 1}.jpg" alt="Artwork ${index + 1}">
    </a>
  `
  ).join("")}
</div>


${Array.from(
  { length: 42 },
  (_, index) => `
  <div id="img${index + 1}" class="lightbox">
    <img src="../bb/${index + 1}.jpg" alt="Artwork ${index + 1}">
  </div>
`
).join("")}
`,
};
