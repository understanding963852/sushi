let navToggle = document.getElementById("nav_toggle");
let navMenu = document.getElementById("nav_menu");
let navClose = document.getElementById("nav_close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});
//localStorage는 웹 브라우저에서 제공하는 웹 스토리지기술중 하나입니다.
//웹에서 데이터를 클라이언트(자기pc)측에 영구적으로 저장할수 있게 해주는 저장소입니다.

//배경테마 변경(배경색변경)
let themeButton = document.getElementById("theme-button");
let darkTheme = "dark-theme";
let iconTheme = "ri-sun-line";

let getCurrentTheme = () => {
  let result = document.body.classList.contains(darkTheme) ? "dark" : "light";
  return result;
};
let getCurrentIcon = () => {
  let result = themeButton.classList.contains(iconTheme)
    ? "ri-moon-line"
    : "ri-sun-line";
  return result;
};

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //웹의 스토어에 값셋팅
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");
console.log(selectedIcon);

if (selectedTheme) {
  if (selectedTheme == "dark") {
    document.body.classList.add(darkTheme);
  } else {
    document.body.classList.remove(darkTheme);
  }

  if (selectedIcon == "ri-moon-line") {
    themeButton.classList.add(iconTheme);
  } else {
    themeButton.classList.remove(iconTheme);
  }
}

// header
let scrollHeader = () => {
  //let header=document.querySelector('#header');
  let header = document.getElementById("header");
  pageYOffset >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);


//Reveal animation

ScrollReveal().reveal('.home_img,.home_data,.about_data,.about_img,.recently_data,.recently_img,.popular_card,.footer_description,.footer_content,.footer_info', {
    origin: 'top',
    distance: '60px',
    duration: 2500, 
    delay:400,
    // reset: true
});

ScrollReveal().reveal('.home_data', {origin: 'bottom'});
ScrollReveal().reveal('.about_data,.recently_data', {origin: 'left'});
ScrollReveal().reveal('.about_img,.recently_img', {origin: 'right'});
ScrollReveal().reveal('.popular_card', { interval: 100 });


// scroll up
// window.addEventListener("scroll",function(){
//     scrollup()
// })

let scrollup=()=>{
    let scrollup=document.getElementById('scroll-up');
    pageYOffset>=350? 
    scrollup.classList.add('show-scroll'): 
    scrollup.classList.remove('show-scroll');
}
window.addEventListener("scroll",scrollup)

//menu 
let scrollActive=()=>{
    let scrollY=pageYOffset;
    //console.log(scrollY)
    let sections=document.querySelectorAll('section[id]');//section의 속성중 id를 가지고 있는 section
    //console.log(sections)

    //sections.forEach((아이템,아이템의인텍스번호)=>{})//sections의 아이템 각각이 할일

    sections.forEach((current)=>{
        let sectionHeight=current.offsetHeight;//자신의 영역의 전체 높이값
        //console.log(sectionHeight)
        let sectionTop=current.offsetTop - 60;//자신의 영역이 시작되는 지점, 나의 머리가 천정에 닿는지점

        let sectionId=current.getAttribute('id');
        //console.log(sectionId)

        let sectionClass=document.querySelector(`.nav_menu a[href*="${sectionId}"]`);

         console.log(sectionClass)

         if(scrollY>sectionTop && scrollY<= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link');
         }else{
            sectionClass.classList.remove('active-link');
         }

    })




}

window.addEventListener('scroll',scrollActive)