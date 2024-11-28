function locomotiveScrolling(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loadingAnimation(){
    var tl = gsap.timeline()
tl.from(".line-loader h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5
})

tl.from("#message", {
    opacity: 0
})

tl.from("#line1-part1, .line-loader h5",{
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
tl.to(".line-loader",{
    opacity: 0,
    duration : 0.4,
    stagger: 0.1,
    delay: 2.5, /** change here........................................................................... */
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
}, "-=0.5")

tl.from(".hero h1",{
    y: 150,
    stagger: 0.2
},  "-=0.5")
tl.from("#hero1, #content-part2",{
    opacity: 0,
}, "-=1.2")
tl.from("#number-page1",{
    opacity: 0,
}, "-=1.2")
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


locomotiveScrolling()
loadingAnimation();
// cursorAnimation();