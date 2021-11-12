var id = null;
var pos = 0;

document.querySelector(".navbutton").addEventListener("click",function(){
  document.querySelector(".nav_item").style.display="block";
  
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 180) {
        clearInterval(id);
       document.querySelector(".navsticky").style.marginLeft="180px";
     
       document.querySelector(".navbutton").style.display="none";
      } 
    
      else {
        pos=pos+2;
        document.querySelector(".nav_item").style.width = pos + 'px';
        document.querySelector(".carousel-indicators").style.zIndex="1";
        
      }
    }
})
document.querySelector(".nav_close").addEventListener("click",function(){
   
       pos=180;
      clearInterval(id);
      id = setInterval(frame, 5);
      function frame() {
        if (pos == 0) {
          clearInterval(id);
         
        } 
        if(pos==160){
          document.querySelector(".navbutton").style.display="block";
         
          document.querySelector(".navsticky").style.marginLeft="0px";
        }
        if(pos==70){
            document.querySelector(".nav_item").style.display="none";
            document.querySelector(".carousel-indicators").style.zIndex="";
        }
        else {
          pos=pos-2;
          document.querySelector(".nav_item").style.width = pos + 'px';
          
        }
      }
     
  })
  const nav = document.querySelector('.navsticky');
  let navTop =nav.offsetTop;
  window.addEventListener('scroll', function(){
    if (window.scrollY >= navTop) {
      nav.classList.add('sticky');   
    
     
    }
    if (window.scrollY >= 100) {
      document.querySelector(".carousel-indicators").style.zIndex="1";
    }
    
    else {
      nav.classList.remove('sticky');    
      document.querySelector(".carousel-indicators").style.zIndex="";
    }
  })
  
  
