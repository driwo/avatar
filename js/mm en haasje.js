let colorIndex = 0;
let combinatie = 0;
let solved = 0;
let haasje = 0;

function colorScanned(color){
    if(colorIndex===0){
        for(let i=0;i<3;i++){
            let kleurbox = document.getElementById("k"+i.toString());
            kleurbox.style.backgroundColor = "#c0c0c0";
        }
    }
    let kleurbox = document.getElementById("k"+colorIndex.toString());
    if(color === "rood"){
        kleurbox.style.backgroundColor = "#EC2247";
    }
    else if(color === "blau"){
        kleurbox.style.backgroundColor = "#0080FF";
        if(colorIndex===0){
            combinatie++;
        }
    }
    else if(color === "geel"){
        kleurbox.style.backgroundColor = "#FFD000";
        if(colorIndex===2){
            combinatie++;
        }
    }
    else if(color === "groe"){
        kleurbox.style.backgroundColor = "#90FF20";
        if(colorIndex===1){
            combinatie++;
        }
    }
    else{
        kleurbox.style.backgroundColor = "gray";
        return 0;
    }
    colorIndex++;
    if(colorIndex===3){
        colorIndex = 0;
        checkMastermind();
    }
}

function checkMastermind(){
    let mmtext = document.getElementById("mmtext");
    if(combinatie===3){   //juiste combinatie!
        mmtext.innerHTML = "Mastermind: JUIST!"
        solved = 1;
        checkFase();
    }
    else{
        combinatie = 0;
        mmtext.innerHTML = "Mastermind: FOUT!"
    }
}

function haasjeScanned(){
    if(parseInt(localStorage.getItem('fase'))===2){
        haasje = 1;
        mmtext.innerHTML = "Haasje geraakt!"
        checkFase();
    }

}