var t1 = gsap.timeline();

t1.from(
    ".left-icons svg, .left svg ",
    {
        opacity: 0,
        x: -50,
        stagger: 0.2,
    },
    0.2
);

t1.from(
    ".right-icon svg, .right-text p",
    {
        opacity: 0,
        x: 50,
        stagger: 0.2,
    },
    0.2
);

var t2 = gsap.timeline();
t2.delay(-0.5);

t2.from(".hero-text h4", {
    opacity: 0,
    y: -100,
    stagger: 0.5,
    duration: 1,
    ease: "power2.inOut",
});

t2.from(".hero-text", {
    opacity: 0,
    scale: 2,
    y: -100,
    stagger: 0.5,
    duration: 1,
    ease: "power2.inOut",
});

t2.from(".hero img", {
    opacity: 0,
    duration: 0.25,
    scale: 0.1,
    delay: 0.25,
    stagger: 0.25,
});

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "50% center",
        // scrub: true,
        markers: true,
        toggleActions: "play complete play complete",
    },
});

tl3.from(".about-container h4,.about-container h2", {
    opacity: 0,
    x: -100,
    stagger: 0.5,
    ease: "power2.inout",
});

tl3.from(".about-container img", {
    opacity: 0,
    x: -200,
    stagger: 0.5,
    rotation: -90,
    delay: 1,
    ease: "power2.inout",
});

var t3 = gsap.timeline();

t3.from(".service-container", {
    opacity: 0,
    y: -100,
});

t3.from(".service-card ", {
    opacity: 0,
    stagger: 0.3,
    x: -50,
});

gsap.from(".experience-container h4,.experience-container h2", {
    opacity: 0,
    x: -100,
    stagger: 0.5,
    ease: "power2.inout",
});

gsap.from(".history-text", {
    opacity: 0,
    x: -100,
});

// t4.to(".job", {
//     y: 0,
//     opacity: 100,
//     stagger: 0.5,
// });

var t4 = gsap.timeline();

gsap.from(".job-container", {
    opacity: 0,
    y: -100,
});

gsap.from(".client-text", {
    opacity: 0,
    x: -100,
});

// gsap.from(".client-container", {
//     opacity: 0,
//     y: -200,
// });
var t5 = gsap.timeline();

t5.from(".client-container", {
    opacity: 0,
    y: -100,
    stagger: 0.5,
});

gsap.from(".showreel", {
    opacity: 0,
});

var tl2 = gsap.timeline();

tl2.from(".review-title", {
    opacity: 0,
    x: -100,
});

tl2.from(".review-card", {
    opacity: 0,
    y: -100,
    stagger: 0.5,
});

gsap.from(".motto-text h4, .motto-text h2, .motto-text p", {
    opacity: 0,
    y: -100,
    stagger: 0.5,
});

var t6 = gsap.timeline();
t6.from(".footer-left", {
    opacity: 0,
    x: -100,
    stagger: 0.5,
});

t6.from(".footer-left-content", {
    opacity: 0,
    x: -100,
    stagger: 0.5,
});

t6.from(".footer-right", {
    opacity: 0,
    x: 100,
});

t6.from(".footer-right-content", {
    opacity: 0,
    x: 100,
    stagger: 0.5,
});
