 var crsr = document.querySelector("#cursor");
 var crsrb = document.querySelector("#cursor_b");

 document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    crsrb.style.left=dets.x-200+"px"
    crsrb.style.top=dets.y-200+"px"
 })

gsap.to("#nav",{
    backgroundColor :"#000",
    height:"115px",
    duration:0.7,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -12%",
        scrub:1
    }
}) 
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -35%",
        end:"top -85%",
        scrub:2

    }
})


