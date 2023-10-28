let tl = gsap.timeline()
function time(){
    let a = 0
    setInterval(() => {
        a = a+ Math.floor(Math.random()*27)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a + "%"
        } else{
            a=100;
            document.querySelector("#loader h1").innerHTML =a + "%" ;
        }
    }, 150);
}
tl.to("#loader h1",{
    scale:1.5,
    duration:1.5,
    onStart:time()
})
tl.to("#loader",{
    top:"-100vh",
    duration:2,
})
tl.to("#page1 h1", {
    Transform: "translateX(-56%)",
    fontWeight:200,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top 0",
        end: "top -300%",
        scrub: 2,
        pin: true,
    }
})
