<!--    Sidebar-->
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


//AJAX GALLERY
window.addEventListener("click", () => {
    // (A) GET ALL IMAGES

    var all = document.querySelectorAll(".gallery img");
    console.log(all);
    // (B) CLICK ON IMAGE TO TOGGLE FULLSCREEN
    if (all.length>0) { for (let img of all) {
        img.onclick = () => { img.classList.toggle("full"); };
    }}
});