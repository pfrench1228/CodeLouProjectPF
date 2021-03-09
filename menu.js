
function menuFxn() {
    let a = document.getElementsByClassName("icon")[0];
    let b = document.getElementsByClassName("main-nav")[0];
    let c = document.getElementsByClassName("name")[0];
    let d = document.getElementsByClassName("logo")[0];

    if (b.style.display === "block") {
        a.style.width = "15%";
        b.style.display = "none";
        c.style.textAlign = "center";
        d.style.marginLeft = "auto";
      } else {
        a.style.width = "35%";
        b.style.display = "block";
        c.style.textAlign = "left";
        d.style.marginLeft = "0";
      }
  }