

function openClose(){

  console.log(document.body.classList)
  if(!document.body.classList.contains("menu-open") && !document.body.classList.contains("menu-hide")){
    document.body.classList.add("menu-hide");
    console.log("RAW1")
  }
  if(document.body.classList.contains("vertical-compact-menu")){
    document.body.classList.remove("vertical-compact-menu");
    document.body.classList.add("vertical-overlay-menu");
    console.log("RAW2")
  }

  if (document.body.classList.contains("menu-hide")) {
    document.body.classList.remove("menu-hide");
    document.body.classList.add("menu-open");
    console.log("RAW3")
  }else {
    document.body.classList.remove("menu-open");
    document.body.classList.add("menu-hide");
    console.log("RAW4")
  }
  console.log(document.body.classList)
}
