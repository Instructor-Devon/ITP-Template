var tips = document.querySelector("#tips").children;
let el = document.getElementById("clock");

setInterval(function(){
    el.innerHTML = new Date().toLocaleTimeString("en-US");
}, 1000);

for(let tip of tips) {
    console.log(tip);
    tip.addEventListener("mouseenter", function() {
        this.children[0].style.display = "inline";
    });
    tip.addEventListener("mouseleave", function() {
        console.log("leaving");
        this.children[0].style.display = "none";
    });
}