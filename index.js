function toggleSection(event){
  let selectedElt = document.getElementById(event.target.text);
  if(!selectedElt.classList.contains('show')){
    selectedElt.classList.remove('hide');
    selectedElt.classList.add('show');
  }
  let allElts = ['About','Projects','Contact'];
  let otherElts = allElts.filter(item => item!=event.target.text);
  for(let item of otherElts){
    let otherElt = document.getElementById(item);
    if(otherElt.classList.contains('show')){
      otherElt.classList.remove('show');
      otherElt.classList.add('hide');
    }
  }
}
