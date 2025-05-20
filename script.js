let cartCount = 0;

function addToCart(item) {
  cartCount++;
  document.getElementById('cart').innerText = `Cart (${cartCount})`;
  alert(`${item} added to cart!`);
}

function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you for your message! We'll get back to you soon.");
}

// Animation on scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeInElements.forEach(el => observer.observe(el));
