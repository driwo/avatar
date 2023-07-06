const anilijst = ["maj","seb","kin","ant","mil","lou","bav","daa","noo","lie","mat","joc","cla","pie","dri"];
let hitlijst;
const nrNuke = 9;

const storedA= localStorage.getItem('hitlijst');
if (storedA) {
    hitlijst = JSON.parse(storedA);
}
else {
    hitlijst = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const newStoredA = JSON.stringify(hitlijst);
    localStorage.setItem('hitlijst', newStoredA);
}

for (let i = 0; i < hitlijst.length; i++) {
    let box = document.getElementById(i.toString());
    if(hitlijst[i]){
        box.style.backgroundColor = "#90FF20";
    }
    else{
        box.style.backgroundColor = "#EC2247";
    }

}
function checkName(player){
    const ID = anilijst.indexOf(player);
    let box = document.getElementById(ID.toString());
    box.style.backgroundColor = "#90FF20";

    hitlijst[ID] = 1;
    let sum = 0;
    for (let i = 0; i < hitlijst.length; i++) {
        sum += hitlijst[i];
    }
    if(sum >= nrNuke){
        nukeAvailable();
        hitlijst = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    }
    const newStoredA = JSON.stringify(hitlijst);
    localStorage.setItem('hitlijst', newStoredA);
}

function nukeAvailable(){
    for (let i = 0; i < anilijst.length; i++) {
        let box = document.getElementById(i.toString());
        box.style.backgroundColor = "#EC2247";
    }
    localStorage.setItem('nukeklaar', "1");
    window.location.href = "nuke.html";
}