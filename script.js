// ===============================
// Smooth Scroll for Navigation
// ===============================

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Navbar Background on Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#0f172a";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }
    else{

        header.style.background = "#111827";
        header.style.boxShadow = "none";

    }

});


// ===============================
// Reveal Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}


// ===============================
// Back To Top Button
// ===============================

const button = document.createElement("button");

button.innerHTML = "↑";

button.id = "topBtn";

document.body.appendChild(button);

button.style.position = "fixed";
button.style.bottom = "30px";
button.style.right = "30px";
button.style.padding = "12px 18px";
button.style.border = "none";
button.style.borderRadius = "50%";
button.style.cursor = "pointer";
button.style.fontSize = "22px";
button.style.display = "none";
button.style.background = "#38bdf8";
button.style.color = "#fff";

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        button.style.display = "block";

    }
    else{

        button.style.display = "none";

    }

});

button.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// Typing Effect
// ===============================

const typingText = document.querySelector(".home-text h2");

if(typingText){

    const words = [

        "Python Developer",

        "Full Stack Developer",

        "Django Developer",

        "Web Developer"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type(){

        const currentWord = words[wordIndex];

        if(isDeleting){

            typingText.textContent = currentWord.substring(0,charIndex--);

        }
        else{

            typingText.textContent = currentWord.substring(0,charIndex++);

        }

        if(!isDeleting && charIndex === currentWord.length+1){

            isDeleting = true;

            setTimeout(type,1000);

            return;

        }

        if(isDeleting && charIndex === 0){

            isDeleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

        setTimeout(type,isDeleting ? 70 : 120);

    }

    type();

}

//=============================
// DARK / LIGHT MODE
//=============================

const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    }
    else{

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    }

});