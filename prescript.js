let button = document.getElementById("button");
let anchor = document.getElementById("anchor");
button.addEventListener("click", () => {
  if (document.getElementById("name").value != "") {
    anchor.href = "./index.html";
  }
  else{
      alert("Please fill in your Name!");
  }
});
