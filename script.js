function loadingAnimation(){
    var tl = gsap.timeline()
tl.from(".line h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5
})

tl.from("#message", {
    opacity: 0
})

tl.from("#line1-part1, .line h5",{
    opacity: 0,
    onStart: function(){
        var timerH5 = document.querySelector("#line1-part1 h5");
        var grow = 0;
        
        setInterval(function(){
            if(grow<100){
                grow++
                timerH5.textContent = grow;
            }
        },25)        
    },
})

tl.to("#now", {
    animationName: "nowAnimation"
})

// different elements at different time
tl.to(".line",{
    opacity: 0,
    duration : 0.4,
    stagger: 0.1,
    delay: 2.5,
    ease: Power4

})
tl.to('#loader',{
    opacity: 0,
    duration: 0.4,
})

tl.from("#main",{
    y: 1200,
    opacity: 0,
    duration: 0.4,
    delay: 0.2,
    ease: Power4
})

tl.to('#loader',{
    display: "none"
})

tl.from("#nav", {
    opacity: 0
})

tl.from(".hero h1",{
    y: 150,
    stagger: 0.2
})
}

function cursorAnimation(){
    document.addEventListener("mousemove", function(details){
        gsap.to("#cursor", {
            left: details.x,
            top: details.y
        })
    })
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
    });
}

loadingAnimation();
cursorAnimation();