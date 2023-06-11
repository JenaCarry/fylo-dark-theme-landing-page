const observerBottom = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("initBottomOff", entry.isIntersecting);
      if (entry.isIntersecting) observerBottom.unobserve(entry.target);
    });
  },
  { threshold: 0.8 }
);

const observerTop = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("initTopOff", entry.isIntersecting);
      if (entry.isIntersecting) observerTop.unobserve(entry.target);
    });
  },
  { threshold: 0.4 }
);

const illustrationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("initSideOff", entry.isIntersecting);
      if (entry.isIntersecting) illustrationObserver.unobserve(entry.target);
    });
  },
  { threshold: 1 }
);

const observerDefault = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("initDefaultOff", entry.isIntersecting);
      if (entry.isIntersecting) observerDefault.unobserve(entry.target);
    });
  },
  { threshold: 1 }
);

const initBottom = document.querySelectorAll(".initBottom");
initBottom.forEach((element) => observerBottom.observe(element));

const initTop = document.querySelectorAll(".initTop");
initTop.forEach((element) => observerTop.observe(element));

const illustrationStay = document.querySelector(".illustrationStay");
illustrationObserver.observe(illustrationStay);

const initDefault = document.querySelectorAll(".initDefault");
initDefault.forEach((element) => observerDefault.observe(element));
