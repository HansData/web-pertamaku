// $(window).scroll(function () {
//     var wscroll = $(this).scrollTop();


//     $('.container-games .opacity-game .save-game .games-1 img .reyna').css({
//         'transform': 'translate( 0, ' + wscroll / 4 + ' %)'
//     })
//     console.log(wscroll)
// })

let layer_1 = document.querySelector('.FTprofil')
let layer_2 = document.querySelector('.kenal')
let layer_3 = document.querySelector('.hal')
let layer_4 = document.querySelector('.paralax-profil')
let layer_5 = document.querySelector('.reyna')
let layer_6 = document.querySelector('.pubg')

window.onscroll = function () {
    let y = window.scrollY;

    layer_1.style.transform = 'translateY( ' + y / 1.85 + 'px)'
    layer_2.style.transform = 'translateY( ' + y / 5 + 'px)'
    layer_3.style.transform = 'translateY( ' + y / 8 + 'px)'
    layer_4.style.transform = 'translateY( ' + y / -6 + 'px)'
    layer_5.style.transform = 'translateY( ' + y / 8 + 'px)'
    layer_6.style.transform = 'translateY( ' + y / -7 + 'px)'
}


// efek tekan baru muncul


function penjelasanText() {
    document.querySelector('#p-skill').classList.toggle("open-text")

}

function penjelasanText2() {
    document.querySelector('#p-skill2').classList.toggle("open-text")

}
function penjelasanText3() {
    document.querySelector('#p-skill3').classList.toggle("open-text")

}
function penjelasanText4() {
    document.querySelector('#p-skill4').classList.toggle("open-text")

}

qu