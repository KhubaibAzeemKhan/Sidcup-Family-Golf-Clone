let crsr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 250 + "px"
    blur.style.top = dets.y - 250 + "px"
})
var h4all = document.querySelectorAll("#nav h4");
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         crsr.style.scale = 3
//         crsr.style.border = "1px solid #fff"
//         crsr.style.backgroundColor = "transparent"
//     })
//     elem.addEventListener("mouseleave",function(){
//         crsr.style.scale = 1
//         crsr.style.border = "0px solid #95c11e"
//         crsr.style.backgroundColor = "#95c11e"
//     })
// })


gsap.to("#nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroll:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:".card",
//         scroll:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top 65%",
//         scrub:1
//     }
// });

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})


let dot1 = document.querySelector("#pic-1")
let dot2 = document.querySelector("#pic-2")
let dot3 = document.querySelector("#pic-3")
// dot2.style.backgroundColor = "green"
let count = 0;
dot2.addEventListener("click",function(){
    if(count = 0,count = 2){
        document.querySelector("#pics img").src = "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-e1702553754869-734x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1"
        count = 1;
        dot1.style.backgroundColor = "#fff"
        dot2.style.backgroundColor = "#95c11e"
        dot3.style.backgroundColor = "#fff"
    }
})
dot1.addEventListener("click",function(){
    if(count = 1,count = 2){
        document.querySelector("#pics img").src = "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5-1002x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1"
        count = 0;
        dot2.style.backgroundColor = "#fff"
        dot3.style.backgroundColor = "#fff"
        dot1.style.backgroundColor = "#95c11e"
    }
})
dot3.addEventListener("click",function(){
    if(count = 0,count = 1){
        document.querySelector("#pics img").src = "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1-682x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1"
        count = 2;
        dot2.style.backgroundColor = "#fff"
        dot1.style.backgroundColor = "#fff"
        dot3.style.backgroundColor = "#95c11e"
    }
})

