let image=document.querySelector(".slider-image");
{let translate=0;
{setInterval(()=> {
    if(translate >= 0 && translate<400){
        translate += 100
    }
    else{
        translate=0
    }
 image.style.transition="1s";
    image.style.transform=`translateX(-${translate}%)`
   
},5000);
function right(){
    if (translate<400){
        translate+=100;
        image.style.transition="0.5s";
        image.style.transform=`translateX(-${translate}%)`
    
    }
    else{
        translate=0;
    }
}
   function left(){
       if (translate>0){
           translate-=100;
           image.style.transition="0.5s";
           image.style.transform=`translateX(-${translate}%)`
        
    }
    else{
        translate=400;
    }
}
}
}

// /*setInterval(()=> {
//     if(translate >= 0 && translate<300){
//         translate += 5;
//     }
//     else{
//         translate=0
//     }
//     console.log("hii")
//    sliderbox1.style.transition="2s";*/
// //  sliderbox1.style.transition="2s";
//     // sliderbox1.style.transform=`translateX(-${translate}%)`
   
// // },5000);

     /****** Slider boxes ******/

let sliderbox1=document.querySelector(".styleimg1");
{
    let translate=0;
    {function slidea(){ 
        if (translate<400){
            translate += 100;
            sliderbox1.style.transition="1s";
            sliderbox1.style.transform=`translateX(-${translate}%)`
            console.log(translate);    
    }
    }
function lidea() {
    if (translate>0){
        translate-=100;
        sliderbox1.style.transition="1s";
        sliderbox1.style.transform=`translateX(-${translate}%)`       
   }   
 }
}
}


let sliderbox2=document.querySelector(".styleimg2");
{
    let translate=0;
   function slideab(){
       if (translate<200){
           translate += 100;
        sliderbox2.style.transition="1s";
        sliderbox2.style.transform=`translateX(-${translate}%)`
    }
    else{
        translate = 200;
    }  
 }
   function leftab(){
       if (translate>0){
           translate-=100;
        sliderbox2.style.transition="1s";
        sliderbox2.style.transform=`translateX(-${translate}%)`
        }
     }
  }

let sliderbox3=document.querySelector(".styleimg3");
  {
    let translate=0;
   function slideac(){
       if (translate<200){
           translate += 100;
        sliderbox3.style.transition="1s";
        sliderbox3.style.transform=`translateX(-${translate}%)`
    
        
    }
    else{
        translate=200;
    }
    
}
   function leftac(){
       if (translate>0){
             translate-=100;
            sliderbox3.style.transition="1s";
            sliderbox3.style.transform=`translateX(-${translate}%)`
        }
     }
  }
  {





  var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */  
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);



  
  }

