const mm= document.getElementsByClassName('mastermind');
if(parseInt(localStorage.getItem('fase'))===1){
    for (let i = 0; i < mm.length; i++) {
        mm[i].style.display = "block";
    }
}
else{
    for (let i = 0; i < mm.length; i++) {
        mm[i].style.display = "none";
    }
}
if(parseInt(localStorage.getItem('fase'))===2){
    let mmtext = document.getElementById("mmtext");
    mmtext.innerHTML = "Jaag het haasje in het bos!";
}
if(parseInt(localStorage.getItem('fase'))===3){
    let mmtext = document.getElementById("mmtext");
    mmtext.innerHTML = "Minutenloop!";
    timer.style.display = "block";
}
if(parseInt(localStorage.getItem('fase'))===4){
    let mmtext = document.getElementById("mmtext");
    mmtext.innerHTML = "Speel julie victory song!";
}

function checkFase(){
    fase = localStorage.getItem('fase');
    sum = 0;
    for (let i = 0; i < hitlijst.length; i++) {
        sum += hitlijst[i];
    }
    if(parseInt(localStorage.getItem('fase'))===1){
        if(solved===1 && sum >=5){
            fase = 2 ;
            for (let i = 0; i < mm.length; i++) {
                mm[i].style.display = "none";
            }
            mmtext.innerHTML = "Jaag het haasje in het bos!"
        }
    }
    else if(parseInt(localStorage.getItem('fase'))===2){
        if(haasje===1 && sum >=8){
            fase = 3;
            mmtext.innerHTML = "Minutenloop!"
            timer.style.display = "block";
        }
    }
    else if(parseInt(localStorage.getItem('fase'))===3){
        if(bomExploded===1 && sum >=10){
            fase = 4;
            mmtext.innerHTML = "Speel julie victory song!";
        }
    }
    localStorage.setItem('fase', fase.toString());
    document.getElementById('result').innerHTML = "fase: " + localStorage.getItem('fase');
}