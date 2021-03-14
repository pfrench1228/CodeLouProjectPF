
function menuFxn() {

    let pxl = window.innerWidth;
    let a = document.getElementsByClassName("icon")[0];
    let b = document.getElementsByClassName("main-nav")[0];
    let c = document.getElementsByClassName("burg")[0];
    let d = document.getElementsByClassName("name")[0];
    let e = document.getElementsByClassName("logo")[0];

      if (b.style.display === "block") {
          a.style.width = "15%";
          // a.style.background = "initial";
          b.style.display = "none";
          b.style.background = "none";
          c.style.maxWidth = "100%";
          if (pxl < 410) {
          d.style.width = "initial";
          e.style.marginLeft = "auto";
            }
        } else {
          a.style.width = "25%";
          // a.style.border = "gainsboro";
          b.style.display = "block";
          b.style.background = "black";
          b.style.borderRadius  = "15px";
          c.style.maxWidth = "60%";
          if (pxl < 410) {
            if (pxl < 350) {
              d.style.width = "83%";
            } else {
              d.style.width = "70%";
            }
          e.style.marginLeft = "0%";
            }
        }
  }