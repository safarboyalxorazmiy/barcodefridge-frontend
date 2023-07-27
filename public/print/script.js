let api = "http://localhost:7777";

let selectedColor;

let colors = document.querySelectorAll(".circle");
colors.forEach(color => {
  color.addEventListener("click", () => {
    if (color.classList.contains("clicked")){
      color.classList.remove("clicked");
      selectedColor = undefined;
    } else {
      colors.forEach(color => {
        color.classList.remove("clicked");
      }) 

      color.classList.add("clicked");
      
      selectedColor = color.getAttribute('class').split(' ')[0];
    }
  })
})

let selectedOrentation;

let orentationBtns = document.querySelectorAll(".orentation-btn");
orentationBtns.forEach(orentationBtn => {
  orentationBtn.addEventListener("click", () => {
    if (orentationBtn.classList.contains("clicked")){
      orentationBtn.classList.remove("clicked");
      selectedOrentation = undefined;
    } else {
      orentationBtns.forEach(orentationBtn => {
      orentationBtn.classList.remove("clicked");
    })

      orentationBtn.classList.add("clicked");
      selectedOrentation = orentationBtn.innerText;
    }
  })
})

let printBtn = document.querySelector("button.print-btn");

printBtn.addEventListener("click", (e) => {
  print(selectedColor, selectedOrentation);
})

function print(selectedColor, selectedOrentation) {
  let obj = {
    color: selectedColor, 
    model: "PRM211", 
    type: "V2", 
    orientation: selectedOrentation, 
    nickel: true
  };

  console.log(JSON.stringify(obj));

  fetch(api + "/api/v1/fridge", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(obj)
  })
}