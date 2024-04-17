const spelerlijst = ["w1","a1","l1","v1","w2","a2","l2","v2","w3","a3","l3","v3","w4","a4","l4","v4"];
let hitlijst;
const nrHit = 2;
let sum = 0;

const storedA= localStorage.getItem('hitlijst');
if (storedA) {
    hitlijst = JSON.parse(storedA);
}
else {
    hitlijst = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const newStoredA = JSON.stringify(hitlijst);
    localStorage.setItem('hitlijst', newStoredA);
}

for (let i = 0; i < hitlijst.length; i++) {
    let box = document.getElementById(i.toString());
    if(hitlijst[i]){
        box.style.backgroundColor = "#4d4d4d";
    }
    else{
        //box.style.backgroundColor = "#EC2247";
    }
}

for (let i = 0; i < hitlijst.length; i++) {
    sum += hitlijst[i];
}
if(sum >= nrHit){
    digitcodeQRscanned();
}

function checkName(player){
    const ID = spelerlijst.indexOf(player);
    let box = document.getElementById(ID.toString());
    box.style.backgroundColor = "#4d4d4d";

    hitlijst[ID] = 1;
    sum = 0;
    for (let i = 0; i < hitlijst.length; i++) {
        sum += hitlijst[i];
    }
    if(sum >= nrHit){
        digitcodeQRscanned();
    }
    const newStoredA = JSON.stringify(hitlijst);
    localStorage.setItem('hitlijst', newStoredA);
}

function digitcodeQRscanned(){
    let code = document.getElementById("104");
    code.innerHTML = codelijst[4];
    code.style.backgroundColor = "#90FF20";
    codecracked = JSON.parse(localStorage.getItem("codecracked"));
    codecracked[4] = 1;
    localStorage.setItem("codecracked",JSON.stringify(codecracked));
}