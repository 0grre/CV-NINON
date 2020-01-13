$(window).scroll(function (event) {
// A chaque fois que l'utilisateur va scroller (descendre la page)
    var y = $(this).scrollTop(); // On récupérer la valeur du scroll vertical

//si cette valeur > à 200 on ajouter la class
    if (y >= 400) {
        $('.nav').addClass('fixed');
    } else {
        // sinon, on l'enlève
        $('.nav').removeClass('fixed');
    }
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







