window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
});

function click1() {
  let f1 = document.getElementById("count");
  let f2 = document.getElementById("price");
  console.log(isNaN(f1),isNaN(f2));
  if(isNaN(f1.value) || isNaN(f2.value)){
    alert("ошибка!");
  }
  else{ 
    alert(parseInt(f1.value) * parseInt(f2.value));
  }
  
  return false;
}
