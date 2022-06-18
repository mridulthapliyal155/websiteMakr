const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //   Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //   Animation
    navLinks.forEach((link, index) => {
      console.log(index);
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.7s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

document.getElementById("get-in-touch-button").onclick = () => {
  location.href = "contact.html";
};

document.getElementById("homepage-button-projects").onclick = () => {
  location.href = "projects.html";
};

document.getElementById("homepage-button-contact").onclick = () => {
  location.href = "contact.html";
};
