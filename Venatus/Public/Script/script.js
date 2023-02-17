
function openRepo(){
  $('body > main > section > section:nth-child(2)').load("/Views/NavBar/Repositories.html")
}
function addSVG(){
  $('body > main > section > section:nth-child(2) > div > span').load("/Views/Extra/svgfile.html");
}
function openPack(){
  $('body > main > section > section:nth-child(2)').load("/Views/NavBar/Packages.html")
  
}
function openProj(){
  $('body > main > section > section:nth-child(2)').load("/Views/NavBar/Projects.html")
}
function openStars(){
  $('body > main > section > section:nth-child(2)').load("/Views/NavBar/Stars.html")
}

function openOver(){
  $('body > main > section > section:nth-child(2)').load("/Views/NavBar/Overview.html");
}

openOver()
