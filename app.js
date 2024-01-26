window.addEventListener("scroll", function() {
    var nav = document.getElementById("maBanniere");
    var img = document.querySelector(".slide-box img ");

/*
    var opacity = 1 - window.scrollY / 10; // Vous pouvez ajuster le 200 selon vos besoins

    // Appliquer l'effet de fondu à l'image
    img.style.filter = "blur(" + window.scrollY / 20 + "px)"; // Vous pouvez ajuster le 20 selon vos besoins

*/
    if (window.scrollY > 0) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    }
});
