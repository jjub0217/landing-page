// $(function () {

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
 ScrollTrigger.matchMedia({
   "(min-width: 1024px)": function () {
     /**
      *  @이미지들이스크롤에의해커지는기능
      *
      */
     $("[data-scroll]").each(function (i, el) {
       gsap.to(el, {
         scrollTrigger: {
           trigger: el,
           start: "0% 100%",
           end: "100% 0%",
           markers: false,
           scrub: 1,
           onToggle: function () {
             $(el).toggleClass("on");
           },
         },
       });
     });

   }
 })


// });



  /**
   * @floatingbox나타나는기능
   * 
   */
// let matchMedia = gsap.matchMedia();
// matchMedia.add("(min-width: 1024px)", ()=>{
//   gsap.timeline({
//     scrollTrigger: {
//     trigger: $(".header .inner"),
//     start:"100% 0%",
//     end: "100% 0%",
//     markers:false,
//     scrub:0,
//     }
//   })
//   .fromTo($(".floating-box"),  {
//     transform: "translate(0, -100%)",
//     transition: "0.5s"
//   },
//   {
//     position: "fixed",
//     top: 0,
//     transform: "translate(0, 0)",
//     zIndex: 10,
//   })
//   })

  /**
   * @페이지가로딩되었을때의기능
   * 
   */
  $(window).on("load",function(e){
    console.log('load 이벤트 실행');
    const header = document.querySelector(".header");
    const floatingBox = document.querySelector(".floating-box");
    window.addEventListener("scroll", function () {
      console.log(header.scrollHeight);
      let curr = this.scrollY;
      console.log(curr);
      if (curr >= header.scrollHeight) {
        floatingBox.classList.add("on");
      } else {
        floatingBox.classList.remove("on");
      }
    });
  }) 


  /**
   * @페이지의사이즈가변경되었을때의기능
   * 
   */
  $(window).resize(function(){
    // console.log('resize 이벤트 실행');
  }) 




/**
 * @mo-gnb_btn클릭했을때 mo-gnb 나타나는 기능
 * 
 */
$(".mo-gnb_btn").click(function (e){
  e.preventDefault();
  if($(this).hasClass("on")){
    $(".mo_gnb").stop().slideUp()
  }else{
  $(".mo_gnb").stop().slideDown(); 
  }
  if ($(this).attr('aria-expanded') === 'false') {
    $(this).attr('aria-expanded', 'true' )
    $(this).addClass("on")
  } else {
    $(this).attr('aria-expanded', 'false' )
    $(this).removeClass("on")
  }
})


/**
 * @mo-gnb의 a 클릭했을때 해당 페이지로 이동하는 기능
 * 
 */
$(".mo_gnb-list a").click(function (e){
  $(".mo_gnb").stop().slideUp()
  $(".mo-gnb_btn").removeClass("on")
})



/**
 * @footer로이동하는기능
 * 
 */
$(".nav-item.about").click(function(e){
  e.preventDefault()
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return false;
})

$(".floating-nav-item.about").click(function(){
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return false;
})

$(".mo_gnb-list .about").click(function(){
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return false;
})




$("body").mousemove(function (e) {
  xVal = e.clientX;
  yVal = e.clientY;
  gsap.to(".cursor", {
    x: xVal,
    y: yVal,
    duration: 0.3,
  });
});



$(".works-area .thumb-box").mouseover(function () {
  gsap.to(".cursor", { scale: 2 });
  gsap.to(".cursor span", { visibility: "visible", opacity: 1 });
});
$(".works-area .thumb-box").mouseleave(function () {
  gsap.to(".cursor", { scale: 1 });
  gsap.to(".cursor span", { visibility: "hidden", opacity: 0 });
});



// const videoElement = document.querySelector("#video_intro");
// 동영상 재생이 끝났을 때 실행되는 이벤트 리스너
// videoElement.addEventListener("ended", function () {
//   // 동영상이 끝나면 loadingAni 실행
//   setTimeout(function () {
//     // console.log(videoElement);
//     loadingAni.play(); // GSAP 애니메이션 실행
//   }, 1200); // 3000 밀리초 = 3초
//   // loadingAni.play();
// });

const loadingAni = gsap.timeline({
  paused: true, // 처음에는 멈춘 상태
});

loadingAni.to(".intro", { yPercent: -100, display: "none" });


//  const flowerAnimation = document.getElementById("flowerAnimation");
//  const totalFrames = 10; // 스프라이트에 있는 총 프레임 수
//  const frameWidth = 100; // 각 프레임의 너비
//  let currentFrame = 0;

 // HTML과 CSS 파일의 로드 상태를 추적하는 함수
 function updateProgress() {
   //  const progress =
   //    document.readyState === "complete"
   //      ? 1
   //      : document.readyState === "interactive"
   //      ? 0.5
   //      : 0;

   //  // progress 값을 프레임 수에 매핑하여 현재 프레임 결정
   //  currentFrame = Math.floor(progress * totalFrames);

   //  // 스프라이트 이미지의 위치 업데이트
   //  flowerAnimation.style.backgroundPosition = `-${
   //    currentFrame * frameWidth
   //  }px 0`;

   //  // 로딩이 완료되었으면 더 이상 업데이트하지 않음
   //  if (progress === 1) {
   //    clearInterval(progressInterval);
   //  }
   // 개발자 도구에 텍스트 "ㅁ" 출력
  //  console.log("ㅁ");

  //  // 모든 리소스가 로드되면 더 이상 출력하지 않음
  //  if (progress === 1) {
  //    clearInterval(progressInterval);
  //  }
   const progress =
     document.readyState === "complete"
       ? 1
       : document.readyState === "interactive"
       ? 0.5
       : 0;

        if (progress === 1) {
          clearInterval(progressInterval);
        }
  //    setTimeout(function () {
  //   // console.log(videoElement);
  //   loadingAni.play(); // GSAP 애니메이션 실행
  // }, 1200); 
 }

 // 일정 시간 간격으로 로드 상태를 업데이트
 const progressInterval = setInterval(function () {
   // console.log(videoElement);
   loadingAni.play(); // GSAP 애니메이션 실행
 }, 1200);
   
