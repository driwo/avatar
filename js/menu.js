clearcode = document.getElementById('clearcode');
clearcode.addEventListener("click", clearCode);
clearspeler = document.getElementById('clearspelers');
clearspeler.addEventListener("click", clearSpelers);
clearwater = document.getElementById('clearwater');
clearwater.addEventListener("click", clearWater);
clearaarde = document.getElementById('clearaarde');
clearaarde.addEventListener("click", clearAarde);
clearlucht = document.getElementById('clearlucht');
clearlucht.addEventListener("click", clearLucht);
clearvuur = document.getElementById('clearvuur');
clearvuur.addEventListener("click", clearVuur);

function clearWater(){
    localStorage.removeItem('waterwidth');
}
function clearAarde(){
    localStorage.removeItem('aardewidth');
}
function clearLucht(){
    localStorage.removeItem('luchtwidth');
}
function clearVuur(){
    localStorage.removeItem('vuurwidth');
}
function clearCode(){
    localStorage.removeItem('codecracked');
}

function clearSpelers(){
    hitlijst = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const newStoredA = JSON.stringify(hitlijst);
    localStorage.setItem('hitlijst', newStoredA);
}