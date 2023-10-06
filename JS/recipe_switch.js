///// SWITCH INGREDIENT / PREPARATION /////

// SELECTIONS DES BOUTON ---------------------------------------------

    // Bouton PREPARATION
const prepaButtonBox = document.querySelector('#preparation_title_box');
const prepaButtonTitle = document.querySelector('#preparation_title');
const prepaButtonBoxSelect = document.querySelector('#preparation_title_box_select');
const prepaButtonTitleSelect = document.querySelector('#preparation_title_select');

    // Bouton INGREDIENTS
const ingreButtonBox = document.querySelector('#ingredients_title_box');
const ingreButtonTitle = document.querySelector('#ingredients_title');
const ingreButtonBoxSelect = document.querySelector('#ingredients_title_box_select');
const ingreButtonTitleSelect = document.querySelector('#ingredients_title_select');

// SELECTION DES SIDES ----------------------------------
    // SIDE PREPARATION
const PrepaSide = document.querySelector('.preparation_box');

    // SIDE INGREDIENTS
const IngreSide = document.querySelector('.ingredients_box');


// gestion des évènement au click 

prepaButtonBox.addEventListener("click", function(){
    PrepaSide.style.display ="block";
    IngreSide.style.display ="none";

    prepaButtonBoxSelect.style.display ="block";
    prepaButtonTitleSelect.style.display ="block";
    ingreButtonBoxSelect.style.display ="none";
    ingreButtonTitleSelect.style.display ="none"

    prepaButtonBox.style.display ="none";
    prepaButtonTitle.style.display ="none";
    ingreButtonBox.style.display ="block";
    ingreButtonTitle.style.display ="block";
    });

ingreButtonBox.addEventListener("click", function(){
    PrepaSide.style.display ="none";
    IngreSide.style.display ="block";

    prepaButtonBoxSelect.style.display ="none";
    prepaButtonTitleSelect.style.display ="none";
    ingreButtonBoxSelect.style.display ="block";
    ingreButtonTitleSelect.style.display ="block";

    prepaButtonBox.style.display ="block";
    prepaButtonTitle.style.display ="block";
    ingreButtonBox.style.display ="none";
    ingreButtonTitle.style.display ="none";
    });



///// SWITCH info + /////

///selection du bouton [en savoir +]
const Button_movie_infos_off = document.querySelector('#movie_info_button_closed');
const Button_movie_infos_on = document.querySelector('#movie_info_button_open');


/// selection Div Movie info
const movie_infos = document.querySelector('.movie_infos')
const movie_infos_container= document.querySelector('.movie_infos_container')

/// gestion evenement au click

Button_movie_infos_off.addEventListener("click", function(){
    movie_infos.style.display ="initial";
    movie_infos_container.style.width = "90%";
    movie_infos_container.style.padding = "0 0 0 3em";


    Button_movie_infos_off.style.display ="none";
    Button_movie_infos_on.style.display ="flex";
    });

Button_movie_infos_on.addEventListener("click", function(){
    movie_infos.style.display ="none";
    
    Button_movie_infos_off.style.display ="flex";
    Button_movie_infos_on.style.display ="none";
    });