// Contact Form Script
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  if(name && email && message){
    document.getElementById("formMsg").textContent = "✅ Thank you! Your message has been sent.";
    this.reset();
  } else {
    document.getElementById("formMsg").textContent = "❌ Please fill in all fields.";
  }
});
