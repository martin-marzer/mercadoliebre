// function myFunction() {
//     let x = document.getElementById("main-navbar-mobile");
//     if (x.classList.contains("active")) {
//         x.classList.remove("active");
//       } else {
//         x.classList.add("active");
//       }
//   }



let hint = document.getElementById('main-navbar-mobile');
let btn = document.getElementById('btn-menu');

    btn.addEventListener('click', function(){
    let ctr = 1;
    hint.className = hint.className !== 'show' ? 'show' : 'hide';
    if (hint.className === 'show') {
        hint.style.display = 'block';
        window.setTimeout(function(){
        hint.style.opacity = 1;
        hint.style.transform = 'scale(1)';
        },0);
    }
    if (hint.className === 'hide') {
        hint.style.opacity = 0;
        hint.style.transform = 'scale(0)';
        window.setTimeout(function(){
        hint.style.display = 'none';
        },700); // timed to match animation-duration
    }
    
    });
