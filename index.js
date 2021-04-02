document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#portfolio-container").style.display = "none";
    document.querySelector("#loader").style.display = "block";
  });

  window.onload = function() {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#portfolio-container").style.display = "block";
  }

function toggleSection(event){
  let currentTab = event.target.text;
  if(event.target.text.trim()=='BANUREKHA MOHAN') currentTab = 'About';
  let selectedElt = document.getElementById(currentTab);
  if(!selectedElt.classList.contains('show')){
    selectedElt.classList.remove('hide');
    selectedElt.classList.add('show');
  }
  let allElts = ['About','Contact'];
  let otherElts = allElts.filter(item => item!==currentTab);
  for(let item of otherElts){
    let otherElt = document.getElementById(item);
    if(otherElt.classList.contains('show')){
      otherElt.classList.remove('show');
      otherElt.classList.add('hide');
    }
  }
}
