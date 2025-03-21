// Handling the search button click event
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchQuery = document.querySelector('.search-bar input').value;
    if (searchQuery) {
      alert('Searching for: ' + searchQuery);
    }
  });
  // Intersection Observer for product card animations
const products = document.querySelectorAll('.product-card');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeInVisible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

products.forEach(product => {
  observer.observe(product);
});
// JavaScript to handle the modal popup for the product images

function openModal(imageSrc) {
    // Show the modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
  
    // Set the image source to the clicked product image
    modal.style.display = "block";
    modalImg.src = imageSrc;
  }
  
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  // JavaScript to trigger scroll-based animation for the image and text

const aboutImage = document.querySelector('.about-image img');
const aboutText = document.querySelector('.about-text');
const aboutSection = document.querySelector('.about-grok');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add class to trigger animations
      aboutSection.classList.add('about-grok-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the section is visible
});

// Start observing the about section
observer.observe(aboutSection);
// JavaScript to trigger scroll-based animation for blog posts

const blogPosts = document.querySelectorAll('.blog-post');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-post-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the post is visible
});

// Start observing each blog post
blogPosts.forEach(post => {
  observer.observe(post);
});
// JavaScript to trigger scroll-based animation for feature cards

const featureCards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add class to trigger animations
      entry.target.classList.add('animate-feature-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the feature card is visible
});

// Start observing each feature card
featureCards.forEach(card => {
  observer.observe(card);
});
// JavaScript to trigger scroll-based animation for new addition cards

const newAdditionCards = document.querySelectorAll('.new-addition-card');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add class to trigger animations
      entry.target.classList.add('animate-item-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the card is visible
});

// Start observing each new addition card
newAdditionCards.forEach(card => {
  observer.observe(card);
});
// JavaScript to detect when the service section comes into view and trigger animation
document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll('.service'); // All service blocks
  
    // Intersection Observer callback function to trigger animation
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add class to make the service visible when it enters the viewport
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    }, { threshold: 0.5 });
  
    services.forEach(service => {
      observer.observe(service); // Start observing each service block
    });
  });
  