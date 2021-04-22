//////////// función para teclados

function keyEvent(event) {
  var key = event.keyCode;
  // tecla a
  if (key === 65) {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "notas/50.mp3");
    etiquetaAudio.play();
    document.querySelector(".a").style.backgroundColor = "#A8E6CE";
    document.querySelector("body").style.backgroundColor = "#A8E6CE";
  }else{
    document.querySelector(".a").style.backgroundColor = "#f7f7f7";
  }
  // tecla w
  if (key === 87) {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "notas/51.mp3");
    etiquetaAudio.play();
  }
  // tecla s
  if (key === 83) {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "notas/52.mp3");
    etiquetaAudio.play();
    document.querySelector(".s").style.backgroundColor = "#DCEDC2";
    document.querySelector("body").style.backgroundColor = "#DCEDC2";
  }else{
    document.querySelector(".s").style.backgroundColor = "#f7f7f7";
  }
  // tecla e
  if (key === 69) {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "notas/53.mp3");
    etiquetaAudio.play();
  }
  // tecla d
  if (key === 68) {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "notas/54.mp3");
    etiquetaAudio.play();
    document.querySelector(".d").style.backgroundColor = "#FFD3B5";
    document.querySelector("body").style.backgroundColor = "#FFD3B5";
  }else{
    document.querySelector(".d").style.backgroundColor = "#f7f7f7";
  }
  // tecla f
  if (key === 70) {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "notas/55.mp3");
    etiquetaAudio.play();
    document.querySelector(".f").style.backgroundColor = "#FFAAA6";
    document.querySelector("body").style.backgroundColor = "#FFAAA6";
  }else{
    document.querySelector(".f").style.backgroundColor = "#f7f7f7";
  }
  // tecla t
  if (key === 84) {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "notas/56.mp3");
      etiquetaAudio.play();
  }
  // tecla g
  if (key === 71) {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "notas/57.mp3");
      etiquetaAudio.play();
      document.querySelector(".g").style.backgroundColor = "#FF8C94";
      document.querySelector("body").style.backgroundColor = "#FF8C94";
  }else{
    document.querySelector(".g").style.backgroundColor = "#f7f7f7";
  }
  // tecla y
  if (key === 89) {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "notas/58.mp3");
      etiquetaAudio.play();
  }
  // tecla h
  if (key === 72) {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "notas/59.mp3");
      etiquetaAudio.play();
      document.querySelector(".h").style.backgroundColor = "#FDE47F";
      document.querySelector("body").style.backgroundColor = "#FDE47F";
  }else{
    document.querySelector(".h").style.backgroundColor = "#f7f7f7";
  }
  // tecla u
  if (key === 85) {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "notas/60.mp3");
      etiquetaAudio.play();
  }
  // tecla j
  if (key === 74) {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "notas/61.mp3");
      etiquetaAudio.play();
      document.querySelector(".j").style.backgroundColor = "#FF823A";
      document.querySelector("body").style.backgroundColor = "#FF823A";
  }else{
    document.querySelector(".j").style.backgroundColor = "#f7f7f7";
  }
  // tecla k
  if (key === 75) {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "notas/62.mp3");
      etiquetaAudio.play();
      document.querySelector(".k").style.backgroundColor = "#F04155";
      document.querySelector("body").style.backgroundColor = "#F04155";
  }else{
    document.querySelector(".k").style.backgroundColor = "#f7f7f7";
  }
  // tecla o
  if (key === 79) {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "notas/63.mp3");
      etiquetaAudio.play();
  }
  // tecla l
  if (key === 76) {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "notas/64.mp3");
      etiquetaAudio.play();
      document.querySelector(".l").style.backgroundColor = "#F1EFA5";
      document.querySelector("body").style.backgroundColor = "#F1EFA5";
  }else{
    document.querySelector(".l").style.backgroundColor = "#f7f7f7";
  }
  // tecla p
  if (key === 80) {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "notas/65.mp3");
      etiquetaAudio.play();
  }
  // tecla ñ
  if (key === 186) {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "notas/66.mp3");
      etiquetaAudio.play();
      document.querySelector(".ñ").style.backgroundColor = "#069796";
      document.querySelector("body").style.backgroundColor = "#069796";
  }else{
   document.querySelector(".ñ").style.backgroundColor = "#f7f7f7";
  }
}

//////////// función para ratón o móviles
