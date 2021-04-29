const HomeBtn = document.getElementById("Homebtn")
var egg = 0

HomeBtn.addEventListener("click", () => {
  egg++
  if (egg == 1) {
    document.title = "pazzazzo - acceuil"
  } else if (egg == 2) {
    document.title = "pazzazzo - acceuil (x2)"
  } else if (egg == 3) {
    document.title = "pazzazzo - acceuil (x3)"
  } else if (egg == 4) {
    document.title = "pazzazzo - acceuil (X4)"
  } else if (egg == 5) {
    document.title = "PAZZAZZO - ACCEUIL"
  } else if (egg == 6) {
    document.title = "RELOADED!"
  } else if (egg == 7) {
    document.title = "MEGA RELOAD"
  } else if (egg == 8) {
    document.title = "stop."
  } else if (egg == 9) {
    document.title = "I SAID STOP! "
  } else if (egg == 10) {
    document.title = "Okay..."
  } else if (egg == 11) {
    document.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  } 
})