function checkBackground() {
  if(document.body.style.background=="white") {
      changeColor("black", "white")
  }
  else {
      changeColor("white", "black")
  }
}

function changeColor(color, color2) { 
  document.body.style.background = color; 
  document.body.style.color = color2;
} 

function makeid() {
  length = document.getElementById("myText").value

  if (length>0 && length<=1152 && isNaN(length) == false) {

    document.getElementById("start").innerHTML = ""
    document.getElementById("error").innerHTML = ""
    document.getElementById("makeid").removeChild(document.getElementById("confirm"))

    var result           = '';
    var characters       = 'あいうえおかがきぎくぐけげこごさざしじすずせぜそぞただちぢつづてでとどなにぬねのはばぱひびぴふぷへべぺほぼぽまみむめもやゆよらりるれろわをん';
    var charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById("characters").innerHTML = result
  }

  else document.getElementById("error").innerHTML = "Wrong value, max value is 1152"
}

function start(){
  document.getElementById("start").innerHTML = "How many charactes do you wanna type?"
  document.getElementById("confirm").innerHTML = "Confirm"
}