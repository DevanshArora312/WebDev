
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
function openRealRepo(){
  $('body > main > section > section:nth-child(2)').load("/Views/Extra/RealRepo.html");
  
}

function dropClick1(){
  var cls,style;
  cls = document.querySelector('.repo-dropdown-content1');
  style=getComputedStyle(cls);
    if (style.display ==="none"){      
      $('.repo-dropdown-content1').css("display" , "block");
    }
    else{
    $('.repo-dropdown-content1').css("display" , "none");
  }
  }
function dropClick2(){
    var cls,style;
    cls = document.querySelector('.repo-dropdown-content2');
    style=getComputedStyle(cls);
      if (style.display ==="none"){      
        $('.repo-dropdown-content2').css("display" , "block");
      }
      else{
      $('.repo-dropdown-content2').css("display" , "none");
    }
    }
function dropClick3(){
      var cls,style;
      cls = document.querySelector('.repo-dropdown-content3');
      style=getComputedStyle(cls);
        if (style.display ==="none"){      
          $('.repo-dropdown-content3').css("display" , "block");
        }
        else{
        $('.repo-dropdown-content3').css("display" , "none");
      }
      }
function hideContent1(){
  $('.repo-dropdown-content1').css("display" , "none");
}
function hideContent2(){
  $('.repo-dropdown-content2').css("display" , "none");
}
function hideContent3(){
  $('.repo-dropdown-content3').css("display" , "none");
}

openOver()

list = document.getElementsByClassName('nav-but');

for (i=0;i<5;i++){
    list[i].addEventListener("click",(e)=>{
      elementID=e.target.id;
      var elem = document.getElementById(elementID);
  for (i=0;i<5;i++){
    var obj = document.getElementById(tabs[i]);
    obj.className = "nav-but";
  }
  elem.className = "nav-but2";
    })
}
tabs = ['overview','repo','pack','proj','star'];

