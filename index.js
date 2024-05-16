
gsap.to(".loader", {
    duration: 4,
    height: "0",
    ease: "Expo.easeInOut",
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function scrollToId(event, id, scrollAmount) {
    event.preventDefault();
    const element = document.getElementById(id);
    const offset = element.getBoundingClientRect().top + window.scrollY;
    const targetScroll = offset - scrollAmount;
    window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
    });
}

