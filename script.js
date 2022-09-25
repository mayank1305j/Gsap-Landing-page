let quotes = [
  "You must do the things you think you cannot do.",
  "Leave no stone unturned.",
  "If it matters to you, you’ll find a way.",
  "All limitations are self-imposed.",
  "Everything you can imagine is real.",
];
let p = document.querySelector(".quote p");

let count = 0;
setTimeout(() => {
  setInterval(changeQuote, 2000);
}, 3000);

function changeQuote() {
  text();
  p.innerText = quotes[count];
  count++;
  if (count >= quotes.length) {
    count = 0;
    console.log("0");
  }
}

function text() {
  gsap.from(p, {
    y: 10,
    ease: "slow(0.7, 0.7, false)",
  });
}

let tl = gsap.timeline();

tl.from("#nav", {
  y: 10,
  opacity: 0,
  onStart: () => {
    $("#nav > h2:first-child").textillate({ in: { effect: "fadeIn" } });
    $("#nav .quote p").textillate({ in: { effect: "fadeIn" } });
  },
})
  .from("#content", {
    y: 10,
    opacity: 0,
    delay: 0.5,
    onStart: () => {
      $("#content #left #text h2").textillate({ in: { effect: "fadeIn" } });
      $("#content #left #text p").textillate({
        in: { effect: "fadeIn", delay: 5 },
      });
      $("#content #left #text button").textillate({ in: { effect: "fadeIn" } });
    },
  })
  .from("#footer", {
    y: 10,
    opacity: 0,
    delay: 0.5,
    onComplete: () => {
      $("#content #left #text h2").textillate({ in: { effect: "bounceIn" } });
    },
  })
  .from("#right svg", {
    opacity: 0,
    duration: 2,
  });

let sym = document.querySelectorAll("#footer #symbols p");

gsap.from(sym, {
  y: 5,
  yoyo: true,
  repeat: -1,
  stagger: 0.4,
  ease: "slow(0.7, 0.7, false)",
});

setInterval(() => {
  $("#content #left #text h2").textillate("start");
}, 5000);
