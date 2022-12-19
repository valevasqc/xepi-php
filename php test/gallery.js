window.addEventListener("click", () => {
  // (A) GET ALL IMAGES
  
  var all = document.querySelectorAll(".gallery img");
  console.log(all);
  // (B) CLICK ON IMAGE TO TOGGLE FULLSCREEN
  if (all.length>0) { for (let img of all) {
    img.onclick = () => { img.classList.toggle("full"); };
  }}
});