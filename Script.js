
let scroll = $(window).scroll(function (event) {
// A chaque fois que l'utilisateur va scroller (descendre la page)
    var y = $(this).scrollTop(); // On récupérer la valeur du scroll vertical

//si cette valeur > à 200 on ajouter la class
    if (y >= 596) {
        $('.nav').addClass('fixed');
        $('.navMini').addClass('fixed');
        $('.lia').hide('fast');
        $('.iconarrow').removeClass('return');
    } else {
        // sinon, on l'enlève
        $('.nav').removeClass('fixed');
        $('.navMini').removeClass('fixed');
    }
    if (y >= 2100) {
        $('.chargement').addClass('color');
    } else {
        // sinon, on l'enlève
        $('.chargement').removeClass('color');
    }
});

$(document).ready(function(){
    $('#btn').click(function (){
        $('.lia').toggle('low');
        $('.iconarrow').addClass('return');
    });
});

const bandeaufond = document.querySelector('.bandeaufond');
window.addEventListener('scroll', () => {
    bandeaufond.style.backgroundPositionY = -window.scrollY/5 + "px";
});

const part2 = document.querySelector('.part2');
window.addEventListener('scroll', () => {
    part2.style.backgroundPositionY = 200-window.scrollY/5 + "px";
});

const footer= document.querySelector('footer');
window.addEventListener('scroll', () => {
    footer.style.backgroundPositionY = 500-window.scrollY/5 + "px";
});

// recup élements icon du bandeau et élément Paragraphe
let ELementsIcon = document.querySelectorAll('div.idiv > i');
let ElementsPara = document.querySelectorAll('div.idiv > p');

// quand on clique il vérifie si la classe est bas ou haut et la change + fait apparaitre ou disparaitre info
for (let i=0; i<ELementsIcon.length; i++){
    ELementsIcon[i].addEventListener('click', function(){
        for (let k=0; k<ELementsIcon[i].classList.length; k++) {

            if (ELementsIcon[i].classList[k] == 'i-bas') {
                ELementsIcon[i].classList.replace('i-bas', 'i-haut');
                ElementsPara[i].style.display='flex';
            }
            else if (ELementsIcon[i].classList[k] == 'i-haut') {
                ELementsIcon[i].classList.replace('i-haut', 'i-bas');
                ElementsPara[i].style.display='none';
            }
        }
    });
}






