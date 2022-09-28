const body = document.querySelector("body");

// all the principal title
const title = document.getElementsByClassName("title_sec");
for (var i = 0; i < 1; i++) {
  title[i].style.opacity = "0";
  title[i].style.transform = "translateY(-50px)";
}

window.addEventListener("scroll", function () {
  for (i = 0; i < 1; i++) {
    if (
      document.documentElement.scrollTop >
      about.offsetTop - nav.offsetHeight - 300
    ) {
      title[i].style.opacity = "1";
      title[i].style.transform = "translateY(0px)";
    } else {
      title[i].style.opacity = "0";
      title[i].style.transform = "translateY(-50px)";
    }
  }
});

// LOADING PAGE
const loading = document.querySelector(".loading_page");
const img = document.querySelector(".loading_page img");

function start_loading() {
  body.style.overflow = "hidden";
  loading.style.display = "flex";
  about.style.display = "none";
  contact.style.display = "none";
  portfolio.style.display = "none";
  setTimeout(function () {
    loading.style.display = "none";
    body.style.overflow = "visible";
    about.style.display = "block";
    contact.style.display = "block";
    portfolio.style.display = "block";
  }, 5000);
  setTimeout(function () {
    h1.style.transform = "translateY(0)";
    h1.style.opacity = "1";
    header.style.backgroundSize = "60%";
  }, 5500);
  setTimeout(function () {
    h1.style.transform = "translateY(0)";
    h1.style.opacity = "1";
    nav.style.transform = "translateY(0)";
    nav.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.3)";
  }, 6000);
}

//NIGHT MODE
const nightMode = document.querySelector(".night_mode");
const i_nightMode = nightMode.querySelector("i");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

sun.style.display = "none";

// moon.onclick = () => {
//   body.style.backgroundColor = "rgba(0, 0, 0, 1)";
//   sun.style.display = "block";
//   moon.style.display = "none";
// };
// sun.onclick = () => {
//   body.style.backgroundColor = "rgba(255, 255, 255, 1)";
//   sun.style.display = "none";
//   moon.style.display = "block";
// };

// HEADER PAGE
const h1 = document.getElementById("myH1_header");
const header = document.querySelector("header");

h1.style.transform = "translateY(-50px)";
h1.style.opacity = "0";
header.style.backgroundSize = "0%";

setInterval(() => {
  for (i = 0; i < 1; i++) {
    setTimeout(() => {
      h1.style.transform = "translateY(-50px)";
      h1.style.opacity = "0";
    }, 2000);
    setTimeout(() => {
      h1.style.transform = "translateY(0px)";
      h1.style.opacity = "1";
      h1.innerHTML = "i'm a web devloper";
    }, 2700);
    setTimeout(() => {
      h1.style.transform = "translateY(-50px)";
      h1.style.opacity = "0";
    }, 5000);
    setTimeout(() => {
      h1.style.transform = "translateY(0px)";
      h1.style.opacity = "1";
      h1.innerHTML = "i'm a front end devloper";
    }, 5700);
    setTimeout(() => {
      h1.style.transform = "translateY(-50px)";
      h1.style.opacity = "0";
    }, 7200);
    setTimeout(() => {
      h1.style.transform = "translateY(0px)";
      h1.style.opacity = "1";
      h1.innerHTML = "welcome to my portfolio";
    }, 7900);
  }
}, 7900);

//NAVBAR
const nav = document.querySelector("nav");

// function activeLink() {
//   aArray.forEach((item) => {
//     item.classList.remove("active");
//     this.classList.add("active");
//   });
// }
// aArray.forEach((item) => {
//   item.addEventListener("click", activeLink);
// });

// ABOUT
const about = document.getElementById("about");
const card = document.getElementsByClassName("card");
const p1 = card[0].getElementsByTagName("p");
const i_up1 = card[0].getElementsByClassName("bi-chevron-up");
const i_down1 = card[0].getElementsByClassName("bi-chevron-down");
const p2 = card[1].getElementsByTagName("p");
const i_up2 = card[1].getElementsByClassName("bi-chevron-up");
const i_down2 = card[1].getElementsByClassName("bi-chevron-down");
const skils = document.getElementById("skils");
const skil = skils.getElementsByClassName("skil");

card[0].style.transform = "translateX(-50px)";
card[1].style.transform = "translateX(50px)";
card[0].style.opacity = "0";
card[1].style.opacity = "0";

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > about.offsetTop - nav.offsetHeight) {
    card[0].style.transform = "translateX(0px)";
    card[1].style.transform = "translateX(0px)";
    card[0].style.opacity = "1";
    card[1].style.opacity = "1";
  } else {
    card[0].style.transform = "translateX(-50px)";
    card[1].style.transform = "translateX(50px)";
    card[0].style.opacity = "0";
    card[1].style.opacity = "0";
  }
});

i_down1[0].addEventListener("click", function () {
  card[0].style.height = "450px";
  i_down1[0].style.display = "none";
  i_up1[0].style.display = "block";
  setTimeout(function () {
    for (i = 0; i < 4; i++) {
      p1[i].style.filter = "blur(0)";
    }
  }, 1000);
});
i_up1[0].addEventListener("click", function () {
  card[0].style.height = "200px";
  i_down1[0].style.display = "block";
  i_up1[0].style.display = "none";
  for (i = 0; i < 4; i++) {
    p1[i].style.filter = "blur(5px)";
  }
});
i_down2[0].addEventListener("click", function () {
  card[1].style.height = "450px";
  i_down2[0].style.display = "none";
  i_up2[0].style.display = "block";
  setTimeout(function () {
    for (i = 0; i < 4; i++) {
      p2[i].style.filter = "blur(0)";
    }
  }, 1000);
});
i_up2[0].addEventListener("click", function () {
  card[1].style.height = "200px";
  i_down2[0].style.display = "block";
  i_up2[0].style.display = "none";
  for (i = 0; i < 4; i++) {
    p2[i].style.filter = "blur(5px)";
  }
});

for (i = 0; i < 3; i++) {
  skil[i].style.transform = "translateX(-50px)";
  skil[i].style.opacity = "0";
}
window.addEventListener("scroll", function () {
  if (
    document.documentElement.scrollTop >
    skils.offsetTop - nav.offsetHeight - 300
  ) {
    for (i = 0; i < 3; i++) {
      skil[i].style.transform = "translateX(0px)";
      skil[i].style.opacity = "1";
    }
  } else {
    for (i = 0; i < 3; i++) {
      skil[i].style.transform = "translateX(-50px)";
      skil[i].style.opacity = "0";
    }
  }
});

// PORTFOLIO
const portfolio = document.getElementById("portfolio");
const work_container = document.getElementById("work_container");
const work = document.getElementsByClassName("work");

window.addEventListener("scroll", function () {
  if (
    document.documentElement.scrollTop >
    portfolio.offsetTop - nav.offsetHeight - 400
  ) {
    title[1].style.opacity = "1";
    title[1].style.transform = "translateY(0px)";
  } else {
    title[1].style.opacity = "0";
    title[1].style.transform = "translateY(-50px)";
  }
});

window.addEventListener("scroll", function () {
  if (
    document.documentElement.scrollTop >
    myWorks.offsetTop - nav.offsetHeight - 400
  ) {
    work[0].style.transform = "translateX(0px)";
    work[1].style.transform = "translateX(0px)";
    work[0].style.opacity = "1";
    work[1].style.opacity = "1";
  } else {
    work[0].style.transform = "translateX(-50px)";
    work[1].style.transform = "translateX(50px)";
    work[0].style.opacity = "0";
    work[1].style.opacity = "0";
  }
});

// CONTACT
const contact = document.querySelector("footer");
const socailNetworks = document.querySelector(".socialNetworks");
const i_socials = socailNetworks.querySelectorAll("i");
const sName = document.getElementById("social_name");

window.addEventListener("scroll", function () {
  if (
    document.documentElement.scrollTop >
    contact.offsetTop - nav.offsetHeight - 700
  ) {
    title[2].style.opacity = "1";
    title[2].style.transform = "translateY(0px)";
    socailNetworks.style.transform = "translateX(0px)";
    socailNetworks.style.opacity = "1";
  } else {
    title[2].style.opacity = "0";
    title[2].style.transform = "translateY(-50px)";
    socailNetworks.style.transform = "translateX(-50px)";
    socailNetworks.style.opacity = "0";
  }
});

// instagram
i_socials[0].addEventListener("mouseenter", function () {
  contact.style.backgroundColor = "rgb(209, 0, 63)";
  i_socials[0].style.backgroundColor = "transparent";
  for (var i = 1; i < 5; i++) {
    i_socials[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
  // i_socials[0].style.border = "none";
  sName.style.transform = "translateY(-50px)";
  sName.style.opacity = "0";
  setTimeout(() => {
    sName.style.transform = "translateY(0px)";
    sName.style.opacity = "1";
    sName.innerHTML = "instagram";
  }, 200);
});
i_socials[0].addEventListener("mouseout", function () {
  contact.style.backgroundColor = "rgb(255, 255, 255)";
  for (var i = 1; i < 5; i++) {
    i_socials[i].style.backgroundColor = "transparent";
    // i_socials[i].style.border = "1px solid rgba(0, 0, 0, 0.2)";
  }
  i_socials[0].style.border = "1px solid rgba(0, 0, 0, 0.2)";
  sName.innerHTML = "hover the icons";
});

// whatsapp
i_socials[1].addEventListener("mouseenter", function () {
  contact.style.backgroundColor = "rgb(30, 182, 0)";
  i_socials[0].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  for (var i = 2; i < 5; i++) {
    i_socials[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
  // i_socials[1].style.border = "none";
  sName.style.transform = "translateY(-50px)";
  sName.style.opacity = "0";
  setTimeout(() => {
    sName.style.transform = "translateY(0px)";
    sName.style.opacity = "1";
    sName.innerHTML = "whatsapp";
  }, 200);
});
i_socials[1].addEventListener("mouseout", function () {
  contact.style.backgroundColor = "rgb(255, 255, 255)";
  i_socials[0].style.backgroundColor = "transparent";
  // i_socials[0].style.border = "1px solid rgba(0, 0, 0, 0.2)";
  for (var i = 2; i < 5; i++) {
    i_socials[i].style.backgroundColor = "transparent";
    i_socials[i].style.border = "1px solid rgba(0, 0, 0, 0.2)";
  }
  i_socials[1].style.border = "1px solid rgba(0, 0, 0, 0.2)";
  sName.innerHTML = "hover the icons";
});

// gmail
i_socials[2].addEventListener("mouseenter", function () {
  contact.style.backgroundColor = "rgba(250, 146, 11, 0.575)";
  for (var i = 3; i < 5; i++) {
    i_socials[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
  for (var i = 0; i < 2; i++) {
    i_socials[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
  // i_socials[2].style.border = "none";
  sName.style.transform = "translateY(-50px)";
  sName.style.opacity = "0";
  setTimeout(() => {
    sName.style.transform = "translateY(0px)";
    sName.style.opacity = "1";
    sName.innerHTML = "gmail";
  }, 200);
});
i_socials[2].addEventListener("mouseout", function () {
  contact.style.backgroundColor = "rgb(255, 255, 255)";
  for (var i = 3; i < 5; i++) {
    i_socials[i].style.backgroundColor = "transparent";
    // i_socials[i].style.border = "1px solid rgba(0, 0, 0, 0.2)";
  }
  for (var i = 0; i < 2; i++) {
    i_socials[i].style.backgroundColor = "transparent";
    i_socials[i].style.border = "1px solid rgba(0, 0, 0, 0.2)";
  }
  // i_socials[2].style.border = "1px solid rgba(0, 0, 0, 0.2)";
  sName.innerHTML = "hover the icons";
});

// telegram
i_socials[3].addEventListener("mouseenter", function () {
  contact.style.backgroundColor = "rgb(77, 198, 255)";
  i_socials[4].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  for (var i = 0; i < 3; i++) {
    i_socials[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
  // i_socials[3].style.border = "none";
  sName.style.transform = "translateY(-50px)";
  sName.style.opacity = "0";
  setTimeout(() => {
    sName.style.transform = "translateY(0px)";
    sName.style.opacity = "1";
    sName.innerHTML = "telegram";
  }, 200);
});
i_socials[3].addEventListener("mouseout", function () {
  contact.style.backgroundColor = "rgb(255, 255, 255)";
  i_socials[4].style.backgroundColor = "transparent";
  // i_socials[4].style.border = "1px solid rgba(0, 0, 0, 0.2)";
  for (var i = 0; i < 3; i++) {
    i_socials[i].style.backgroundColor = "transparent";
    i_socials[i].style.border = "1px solid rgba(0, 0, 0, 0.2)";
  }
  i_socials[3].style.border = "1px solid rgba(0, 0, 0, 0.2)";
  sName.innerHTML = "hover the icons";
});

// facebook
i_socials[4].addEventListener("mouseenter", function () {
  contact.style.backgroundColor = "rgb(0, 110, 255)";
  for (var i = 0; i < 4; i++) {
    i_socials[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
  // i_socials[4].style.border = "none";
  sName.style.transform = "translateY(-50px)";
  sName.style.opacity = "0";
  setTimeout(() => {
    sName.style.transform = "translateY(0px)";
    sName.style.opacity = "1";
    sName.innerHTML = "facebook";
  }, 200);
});
i_socials[4].addEventListener("mouseout", function () {
  contact.style.backgroundColor = "rgb(255, 255, 255)";
  for (var i = 0; i < 4; i++) {
    i_socials[i].style.backgroundColor = "transparent";
    i_socials[i].style.border = "1px solid rgba(0, 0, 0, 0.2)";
  }
  // i_socials[4].style.border = "1px solid rgba(0, 0, 0, 0.2)";
  sName.innerHTML = "hover the icons";
});
