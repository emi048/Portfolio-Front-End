// --NAV BAR-- // // --NAV BAR-- // // --NAV BAR-- // // --NAV BAR-- //
let nav = document.querySelector('nav');
window.addEventListener('scroll', function(){
    if (window.pageYOffset > 600){
        nav.classList.add('bg-dark', 'transition');
        setTimeout(function(){
            nav.classList.add('shadow');
        }, 100);
    }
    else{
        nav.classList.remove('bg-dark', 'shadow', 'transition');
    }
})
// --NAV BAR-- // // --NAV BAR-- // // --NAV BAR-- // // --NAV BAR-- //




// --IDIOMAS-- // // --IDIOMAS-- // // --IDIOMAS-- // // --IDIOMAS-- // // --IDIOMAS-- //

//español
let ciruclarProgress = document.querySelector(".circular-progress"), progressValue = document.querySelector(".progress-value");
let progressStartValue = 0, progressEndValue = 100, speed = 10;

let progress = setInterval(() => {
    progressStartValue++

    progressValue.textContent = progressStartValue + "%";
    ciruclarProgress.style.background = "conic-gradient(rgba(1,56,105,1)" + progressStartValue * 3.6 + "deg, white 0deg)"; 
    if (progressStartValue == progressEndValue){
        clearInterval(progress);
    }
}, speed);



//ingles
let circularProgress2 = document.querySelector(".circular-progressDOS"),
    progressValue2 = document.querySelector(".progress-valueDOS");

let progressStartValue_ = 0,
    progressEndValue_ = 50,
    speed_ = 10;

let progress_ = setInterval(() => {
    progressStartValue_++
    progressValue2.textContent = progressStartValue_ + "%"
    circularProgress2.style.background = "conic-gradient(rgba(1,56,105,1)" + progressStartValue_ * 3.6 + "deg, white 0deg)";
    if (progressStartValue_ == progressEndValue_){
        clearInterval(progress_)
    }
}, speed_);




//frances
let circularProgress3 = document.querySelector(".circular-progressTRES"),
    progressValue3 = document.querySelector(".progress-valueTRES");

let progressStartValue_3 = 0,
    progressEndValue_3 = 30,
    speed_3 = 10;

let progress_3 = setInterval(() => {
    progressStartValue_3++
    progressValue3.textContent = progressStartValue_3 + "%"
    circularProgress3.style.background = "conic-gradient(rgba(1,56,105,1)" + progressStartValue_3 * 3.6 + "deg, white 0deg)";
    if (progressStartValue_3 == progressEndValue_3){
        clearInterval(progress_3)
    }
}, speed_3);
// --IDIOMAS-- // // --IDIOMAS-- // // --IDIOMAS-- // // --IDIOMAS-- // // --IDIOMAS-- //


//TIPEADO DEL PRINCIPIO//
let i, text;
i= 0;
text = "Bienvenido a mi Portfolio Web";

function typing(){
    if (i < text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,70);
    }
}
typing();
//TIPEADO DEL PRINCIPIO//













