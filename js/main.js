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

    var result = '';
    var kana = 'あいうえおかがきぎくぐけげこごさざしじすずせぜそぞただちぢつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもやゆよらりるれろわをん';
    var romaji = ['a', 'i', 'u', 'e', 'o', 'ka', 'ga', 'ki', 'gi', 'ku', 'gu', 'ke', 'ge', 'ko', 'go', 'sa', 'za', 'shi', 'ji', 'su', 'zu', 'se', 'ze', 'so', 'zo', 'ta', 'da', 'chi', 'di', 'tsu', 'du', 'te', 'de', 'to', 'do', 'na', 'ni', 'me', 'ne', 'no', 'ha', 'ba', 'pa', 'hi', 'bi', 'pi', 'hu', 'bu', 'pu', 'he', 'be', 'pe', 'ho', 'bo', 'po', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo', 'n']
    var charactersLength = kana.length;

    for ( var i = 0; i < length; i++ ) {
      result += kana.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById("characters").innerHTML = result
  }

  else document.getElementById("error").innerHTML = "Invalid value, max value is 1152"
}

function start(){
  document.getElementById("start").innerHTML = "How many characters do you wanna type?"
  document.getElementById("confirm").innerHTML = "Confirm"
}