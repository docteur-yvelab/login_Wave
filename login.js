let o1 = document.getElementById("o1");
let o2 = document.getElementById('o2');
let mail = document.getElementById('mail')
let mdp = document.getElementById('mdp')
o1 = addEventListener('click', () => {
    console.log("j ai cliquer");
    if (o1.style.opacity= 0){
        o1.style.opacity = 1;
        o2.style.opacity = 0;
    }else{
        o1.style.opacity = 1;
    }
    // o2 = addEventListener('click', () => {
    //     console.log("j ai cliquer de deuxieme");
    //     o2.style.opacity = 1;

    // })
});
