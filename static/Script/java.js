let sec1 = document.querySelector(".main-1");
let header = document.querySelector(".header");
let menuBtn = document.querySelector(".hd-menu-bars");
let upBtn = document.querySelector(".up");
let sections = document.querySelectorAll('section');
// لمعرفة هل أنا في أول الصفحة ولا لأ
let isTop = true;


// =============== Scroll Effect ===============
window.addEventListener("scroll", function () {

    if (window.scrollY > sec1.offsetTop + 100) {

        header.classList.add("active");
        upBtn.classList.add("active");
        isTop = false;

    } else {

        upBtn.classList.remove("active");
        isTop = true;

        // لو المينيو مش مفتوحة
        if (!menuBtn.classList.contains("active")) {
            header.classList.remove("active");
        }
    }
});


// =============== Menu Button ===============
function openmenu() {

    // اقلب حالة زر المنيو
    menuBtn.classList.toggle("active");

    // لو فتحت المينيو
    if (menuBtn.classList.contains("active")) {
        header.classList.add("active");
    }

    // لو قفلت المينيو
    else {
        // لو أنا فوق (مفيش Scroll)
        if (isTop) {
            header.classList.remove("active");
        }
        // لو تحت → سيبها زي ما هي (مش لازم نشيل الكلاس)
    }
}



window.onscroll= ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight;
        if(top>=offset && top < offset + height){
            sec.classList.add("show-anim");
        }
        else{
            sec.classList.remove("show-anim");
        }
    });
}



/*   Æ   */