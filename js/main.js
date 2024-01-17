AOS.init({
    once: true
})

let header = document.getElementById('header');
let offset = header.offsetHeight;
window.onscroll = function() {
    if (window.scrollY > offset-50) {
        header.classList.add("sticky");
    } else if(window.scrollY < offset-20) {
        header.classList.remove("sticky");
    }
}

// Toggle the menu when the toggle button is clicked
var toggleButton = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu-mobile');
var menuClose = document.querySelector('.menu-close');

toggleButton.addEventListener('click', function() {
    // menu.style.display = (menu.style.display === 'none' ? 'block' : 'none');
    menu.style.transform = "translateX(" + 0 + "%)";   
});

menuClose.addEventListener('click', function() {
    menu.style.transform = "translateX(" + 100 + "%)";   
});


function validateEmail() {
    var input = this.email;
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var is_valid = re.test(input.value);
    var error_span = input.parentElement.getElementsByClassName("error")[0];
    if (input.value.length > 3) {
        if (is_valid) {
            error_span.classList.add("hidden");
            input.classList.remove("invalid")
            input.classList.add("valid");
        } else {
            error_span.classList.remove("hidden");
            error_span.innerText = "Please enter a valid email address"
            input.classList.remove("valid")
            input.classList.add("invalid");
        }
    } else if (input.value.length < 1) {
        error_span.classList.add("hidden");
        input.classList.remove("invalid");
        input.classList.remove("valid");
    }
}
function validatePhone() {
    var input = this.phone;
    var re = /^[0-9._%-]*$/;
    var is_valid = re.test(input.value);
    var error_span = input.parentElement.getElementsByClassName("error")[0];
    if (input.value.length > 3) {
        if (is_valid) {
            error_span.classList.add("hidden");
            input.classList.remove("invalid");
            input.classList.add("valid");
        } else {
            error_span.classList.remove("hidden");
            error_span.innerText = "Please enter a valid phone number"
            input.classList.remove("valid");
            input.classList.add("invalid");
        }
    } else if (input.value.length < 1) {
        error_span.classList.add("hidden");
        input.classList.remove("invalid");
        input.classList.remove("valid");
    }
}


const slides = document.querySelectorAll('.testimonial .testimonial-slides');
const bullets = document.querySelectorAll('.testimonial .testimonial-bullet');

// Set the index of the active slide to 0
let activeIndex = 0;

// Define a function to switch to the next slide
function switchSlide() {
  // Hide the current active slide
  slides[activeIndex].classList.remove('active');
  bullets[activeIndex].classList.remove('active');

  // Move to the next slide or back to the first slide if at the end
  activeIndex = (activeIndex + 1) % slides.length;

  // Show the new active slide
  slides[activeIndex].classList.add('active');
  bullets[activeIndex].classList.add('active');
}

// Set the initial state on page load
slides[activeIndex].classList.add('active');
bullets[activeIndex].classList.add('active');

// Call the switchSlide function every 10 seconds
setInterval(switchSlide, 10000);


// Recaptcha button activation
function recaptchaCallback(response) {
    if (response.length !== 0) {
        document.getElementById("sendbtn").removeAttribute("disabled");
        console.log("enable")
    } else {
        document.getElementById("sendbtn").setAttribute("disabled", "disabled");
        console.log("disable")
    }
}
