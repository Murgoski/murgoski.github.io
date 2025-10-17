/*========== Zoom overlay JS ==========*/
const zoomableImg = document.querySelectorAll("#desktop-section .zoomable, #mobile-section .zoomable");
// zoomableImgs = [<img src="done/EMBER-design.png">, <img src="done/EMBER-design2.png">]

const zoomOverlay = document.getElementById("zoom-overlay");
const zoomedImg = document.getElementById("zoomed-image");
const closeBtn = document.getElementById("close-zoom");

// BOTTOM CODE IS GOOD FOR ONE IMAGE
/* zoomableImg.addEventListener("click", () => {
if (window.innerWidth > 768) return; // Only mobile
zoomedImg.src = zoomableImg.src;
zoomOverlay.classList.add("active");
}); */

zoomableImg.forEach(zoomFunction);

function zoomFunction(img){
  img.addEventListener("click", () => {
    if (window.innerWidth > 768) return; // Only mobile
    zoomedImg.src = img.src;
    zoomOverlay.classList.add("active");
  });
};

/* zoomableImg.forEach (img => {
  img.addEventListener("click", () => {
    if (window.innerWidth > 768) return; // Only mobile
    zoomedImg.src = img.src;
    zoomOverlay.classList.add("active");
  });
}); */

closeBtn.addEventListener("click", () => {
  zoomOverlay.classList.remove("active");
});

zoomOverlay.addEventListener("click", (e) => {
  if(e.target === zoomOverlay){
    zoomOverlay.classList.remove("active");
  }
});

/*========== Button change content JS ==========*/
const desktopBtn = document.getElementById("desktop-img-btn");
const mobileBtn = document.getElementById("mobile-img-btn");
const desktopSection = document.getElementById("desktop-section");
const mobileSection = document.getElementById("mobile-section");

desktopBtn.addEventListener("click", function() {
  mobileSection.classList.remove("visible");
  desktopSection.classList.remove("hidden");
});

mobileBtn.addEventListener("click", function() {
  console.log("Testtt2");
  desktopSection.classList.add("hidden");
  mobileSection.classList.add("visible");
});
