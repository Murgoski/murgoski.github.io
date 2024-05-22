/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*========== sticky navbar ==========*/
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/*========== scroll reveal ==========*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

/*========== READ MORE BUTTON ==========*/
function ReadMore() {
    const aboutContent = document.querySelector('.read-more-container');

    aboutContent.addEventListener('click', event => {
        const current = event.target;

        const isReadMoreBtn = current.className.includes('btn');

        if (!isReadMoreBtn) return;

        const currentText = current.parentNode.querySelector('.read-more-text');

        currentText.classList.toggle('read-more-text--show');

        current.textContent = current.textContent.includes('Read More') ? "Read Less" : "Read More";
    });
}

// Call the function to activate the event listener
ReadMore();

/*========== IN DEVELOPMENT ALERTS ==========*/
function displayComingSoon(){
    /* alert("Coming soon!"); */
    swal({
        title: "Information",
        text: "Coming soon!",
        icon: "info",
        button: "OK",
        customClass: {
            confirmButton: 'swal-button'
        }
    });
    event.preventDefault();
}

function displayInDevelopment(){
    /* alert("The Webpage is still in development!"); */

    swal({
        title: "Information",
        text: "The Webpage is still in development!",
        icon: "info",
        button: "OK",
        customClass: {
            confirmButton: 'swal-button'
        }
    });
    event.preventDefault();
}


/*========== VALIDATIONS ==========*/
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var emailSubjectError = document.getElementById('emailSubject-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var nameInput = document.getElementById('contact-name');
    var name = nameInput.value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required!';
        nameInput.style.borderBottomColor = "red";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name!';
        nameInput.style.borderBottomColor = "red";
        return false;
    }
    nameError.innerHTML = '';
    nameInput.style.borderBottomColor = "green";
    return true;
}

function validateEmail(){
    var emailInput = document.getElementById('contact-email');
    var email = emailInput.value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        emailInput.style.borderBottomColor = "red";
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid';
        emailInput.style.borderBottomColor = "red";
        return false;
    }
    emailError.innerHTML = '';
    emailInput.style.borderBottomColor = "green";
    return true;
}

function validateEmailSubject(){
    var emailSubjectInput = document.getElementById('contact-emailSub');
    var emailSubject = emailSubjectInput.value;

    if(emailSubject.length < 3){
        emailSubjectError.innerHTML = 'Email Subject is required';
        emailSubjectInput.style.borderBottomColor = "red";
        return false;
    }
    emailSubjectError.innerHTML = '';
    emailSubjectInput.style.borderBottomColor = "green";
    return true;
}


function validateForm(){
    var form = document.getElementById('myForm');
    var messageContainer = document.getElementById('textArea');

    // Handle form submission
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if any of the form fields are empty
    let isFormEmpty = false;
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        isFormEmpty = true;
      }
    });

    // Display the message if the form is empty
    if (isFormEmpty) {
        submitError.innerHTML = 'Please fill out the form.';
        return false;
        setTimeout(function(){submitError.style.display = 'none';}, 3000);

    } else {
        submitError.innerHTML = 'Form submitted successfully.';
        submitError.style.color = "green";
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
    }
  });
}

/*========== EMAIL SEND ==========*/

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prepreči privzeto vedenje obrazca

    sendEmail();
});

function sendEmail(){

    (function(){
        emailjs.init("sAmflmlG041uwz56O");
    })();

    var serviceID = "service_kiktn9k";
    var templateID = "template_bkmf9gt";

    var senderName = document.querySelector("#contact-name").value;
    var senderEmail = document.querySelector("#contact-email").value;
    var emailSub = document.querySelector("#contact-emailSub").value;
    var message = document.querySelector("#contact-message").value;

    // Simple form validation
    if (!senderName || !senderEmail || !emailSub || !message) {
        swal({
            title: "Error!",
            text: "Please fill out all fields.",
            icon: "error",
            button: "OK",
        });
        return; // Exit function if validation fails
    }

    var params = {
        sendername: senderName,
        senderemail: senderEmail,
        subject: emailSub,
        message: message
    };

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        swal({
            title: "Success!",
            text: 'Thank you, ' +params['sendername']+'! Your message has been sent!',
            icon: "success",
            button: "OK",
            customClass: {
                confirmButton: 'swal-button'
            }
        });
        
        // Reset the form after successful submission
        document.getElementById('contact-form').reset();
        
    })
    .catch(error => {
        swal({
            title: "Error!",
            text: "Failed to send the message.",
            icon: "error",
            button: "OK",
            customClass: {
                confirmButton: 'swal-button'
            }
        });
        event.preventDefault();
    });
}

/*========== disable right-click on img ==========*/
var images = document.querySelectorAll("img");

// Loop through each <img> element and disable right-click
images.forEach(function(image) {
    image.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
});
