var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function validation(){
  var form = document.getElementById("form2");
  var email = document.getElementById("email").value;
  var text = document.getElementById('text');
  var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(email.match(pattern))
  {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "Your email is valid";
      text.style.color = "#00ff00";
  }
  else{
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.innerHTML = "Please enter a valid email adress";
      text.style.color = "#ff0000";
  }
}

function name_validation(){
  var n = document.getElementById("namel").value;
  if(n == ""){
    alert("The 'Name' field is necessary!");
    return false;
  }
  if (/^[A-Za-z ]+$/.test(n)){
    return true;
  }
  else{
    alert("Only letters allowed in the name field.");
    return false;
  }
}

function subject_validation(){
  var n = document.getElementById("subject").value;
  if(n == ""){
    alert("The 'Subject' field is necessary!");
    return false;
  }
}

function message_validation(){
  var n = document.getElementById("message").value;
  if(n == ""){
    alert("The 'Message' field is necessary!");
    return false;
  }
}

function checkbox_validation(){
  if(document.getElementById("check").checked){
    return true;
  }
  else{
    alert("You should agree to terms and conditions!");
    return false;
  }
}