gsap.from("#background", {
    delay: 1,
    duration: 1.5,
    ease: "expo.inOut",
    scale: 2.5,
});
gsap.from("#overlay img", {
    delay: 1.5,
    x: -100,
    duration: 1.5,
    ease: "expo.inOut",
    opacity: 0,
});
gsap.from("#overlay nav button", {
    delay: 2,
    x: -100,
    duration: 1.5,
    ease: "expo.inOut",
    opacity: 0,
});
gsap.from("#content h1", {
    delay: 2.5,
    y: -50,
    duration: 1.5,
    ease: "expo.inOut",
    opacity: 0,
});
gsap.from("#content p", {
    delay: 3,
    y: -50,
    duration: 1.5,
    ease: "expo.inOut",
    opacity: 0,
});
gsap.from("#content button", {
    delay: 3.5,
    y: -50,
    duration: 1.5,
    ease: "expo.inOut",
    opacity: 0,
});
