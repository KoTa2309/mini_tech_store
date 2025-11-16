// Add to cart popup
document.querySelectorAll('.buy-btn').forEach(btn => {
btn.addEventListener('click', () => {
alert("Added to cart!");
});
});


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener("click", function (e) {
e.preventDefault();
});
});


// Highlight active nav link
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
if (link.href === window.location.href) {
link.classList.add("active");
}
});
