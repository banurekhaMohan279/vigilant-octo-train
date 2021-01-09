document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector(
                  "#portfolio-container").style.visibility = "hidden";
                document.querySelector(
                  "#loader").style.display = "block";
            } else {
                document.querySelector(
                  "#loader").style.display = "none";
                document.querySelector(
                  "#portfolio-container").style.visibility = "visible";
            }
  };

function toggleSection(event){
  let currentTab = event.target.text;
  if(event.target.text.trim()=='BANUREKHA MOHAN') currentTab = 'About';
  let selectedElt = document.getElementById(currentTab);
  if(!selectedElt.classList.contains('show')){
    selectedElt.classList.remove('hide', 'transitionEffect');
    selectedElt.classList.add('show', 'transitionEffect');
  }
  let allElts = ['About','Projects','Contact'];
  let otherElts = allElts.filter(item => item!==currentTab);
  for(let item of otherElts){
    let otherElt = document.getElementById(item);
    if(otherElt.classList.contains('show')){
      otherElt.classList.remove('show', 'transitionEffect');
      otherElt.classList.add('hide', 'transitionEffect');
    }
  }
}
