import gsap from "gsap";

const hero = document.querySelector(".hero.copy");

window.addEventListener("mousemove", (e) => {
  const x = Math.round((e.clientX / window.innerWidth) * 100);
  const y = Math.round((e.clientY / window.innerHeight) * 100);
  gsap.to(hero, {
    "--x": `${x}%`,
    "--y": `${y}%`,
    duration: 0.4,
    ease: "sine.out",
  });
});
