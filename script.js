import { aboutContent } from "./about.js";
import { artworkContent } from "./artwork.js";
import { sensingNatureContent } from "./sensing-nature.js";
import { bbContent } from "./bb.js";
import { theHouseContent } from "./the-house.js";
import { facilitationContent } from "./facilitation.js";
import { webContent } from "./web.js";
import { current_tlp } from "./tlp.js";
import { current_metamorphosis } from "./metamorphosis.js";
import { current_speech } from "./good_nugget.js";

const contentData = {
  about: aboutContent.about,
  artwork: artworkContent.artwork,
  sensingNature: sensingNatureContent.sensingNature,
  bb: bbContent.bb,
  theHouse: theHouseContent.theHouse,
  facilitation: facilitationContent.facilitation,
  web: webContent.web,
  current_tlp: current_tlp.current_tlp,
  current_metamorphosis: current_metamorphosis.current_metamorphosis,
  current_speech: current_speech.current_speech,
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
          button.textContent = "Hide"; // Change button text
        } else {
          imageContainer.style.display = "none"; // Hide the images
          button.textContent = "Show"; // Change button text
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

document
  .getElementById("curatorialLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action of the link
    const curatorialList = document.getElementById("curatorialList");

    // Toggle the display style between 'none' and 'block'
    if (
      curatorialList.style.display === "none" ||
      curatorialList.style.display === ""
    ) {
      curatorialList.style.display = "block"; // Show the hidden list
    } else {
      curatorialList.style.display = "none"; // Hide the list again
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  // Close lightbox when clicking anywhere outside the image
  const lightboxes = document.querySelectorAll(".lightbox");
  lightboxes.forEach((lightbox) => {
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  });
});
