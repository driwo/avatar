let locatiewidth;
const locaties = ["water","aarde","lucht","vuur"];

for(let i = 0; i < 4; i++){
  const bar = document.getElementById(locaties[i] + "bar");
  if(isNaN(parseInt(localStorage.getItem(locaties[i] + 'width'))) || parseInt(localStorage.getItem(locaties[i] + 'width')) === null){
    locatiewidth = 0;
    localStorage.setItem(locaties[i] + 'width', locatiewidth.toString());
  }
  else{
    locatiewidth =  parseInt(localStorage.getItem(locaties[i] + 'width'));
    bar.style.width = locatiewidth + "%";
    if(locatiewidth === 100){
      let code = document.getElementById("10" + i.toString());
      code.innerHTML = codelijst[i];
      code.style.backgroundColor = "#90FF20";
      codecracked = JSON.parse(localStorage.getItem("codecracked"));
      codecracked[i] = 1;
      localStorage.setItem("codecracked",JSON.stringify(codecracked));
    }
  }
}



function fillLocation(locatie) {
  setTimeout(function() {
    let width =  parseInt(localStorage.getItem(locatie + 'width'));
    if(width <= 90) width += 10;
    if(width===100){
      let code = document.getElementById("10" + locaties.indexOf(locatie).toString());
      code.innerHTML = codelijst[locaties.indexOf(locatie)];
      code.style.backgroundColor = "#90FF20";
      codecracked = JSON.parse(localStorage.getItem("codecracked"));
      codecracked[locaties.indexOf(locatie)] = 1;
      localStorage.setItem("codecracked",JSON.stringify(codecracked));
      checkCode();
    }
    localStorage.setItem(locatie + 'width', width.toString());
    const locatieBar = document.getElementById(locatie + "bar");
    locatieBar.style.width = width + "%";
    scan = 0;
  }, 600);
}
