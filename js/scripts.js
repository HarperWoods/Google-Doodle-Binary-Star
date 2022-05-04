// GSAP included in `index.html`
console.log("Who doesn't like binary star systems?");

// Animate with GSAP
gsap.to("#lowMass", {
  x: 60,
  y: 20,
  scale: 0.5,
  duration: 5,
  repeat: 10,
  yoyo: true,
  transformOrigin: "50%, 50%"
});

gsap.to("#highMass", {
  x: -90,
  y: -20,
  duration: 5,
  scale: 2.5,
  repeat: 10,
  yoyo: true,
  transformOrigin: "50%, 50%"
});

gsap.fromTo(
  "#capG",
  {
    y: -100,
    stagger: 1,
    duration: 3,
    ease: "power1"
  },
  {
    opacity: "90%",
    duration: 3,
    y: 0
  }
);

gsap.fromTo(
  "#lowerG",
  {
    y: 100,
    stagger: 1,
    duration: 3,
    ease: "power1"
  },
  {
    opacity: "90%",
    duration: 3,
    y: 0
  }
);

gsap.fromTo(
  "#letterL",
  {
    y: -100,
    stagger: 1,
    duration: 3,
    ease: "power1"
  },
  {
    opacity: "90%",
    duration: 3,
    y: 0
  }
);

gsap.fromTo(
  "#letterE",
  {
    y: 100,
    stagger: 1,
    duration: 3,
    ease: "power1"
  },
  {
    opacity: "90%",
    duration: 3,
    y: 0
  }
);
