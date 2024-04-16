let aardewidth;
const bar = document.getElementById("aardebar");
if(isNaN(parseInt(localStorage.getItem('aardewidth'))) || parseInt(localStorage.getItem('aardewidth')) === null){
  aardewidth = 0;
  localStorage.setItem('aardewidth', aardewidth.toString());
}
else{
  aardewidth =  parseInt(localStorage.getItem('aardewidth'));
  bar.style.width = aardewidth + "%";
}


function fillLocation() {
  setTimeout(function() {
    let width =  parseInt(localStorage.getItem('aardewidth'));

    width += 1;
    localStorage.setItem('aardewidth', width.toString());
    bar.style.width = width + "%";
    scan = 0;
  }, 600);
}
