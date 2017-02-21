strBolds=document.getElementsByTagName("b")[0].innerHTML;
if(strBolds === "CHAPTER LEVEL QUIZ") {
  console.log(strBolds);
  for(var i=0; i<10; i++) {
    console.log(document.getElementsByTagName("table")[7].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[(i*5)+1].innerText.trim());
    for(var j=1; j<=4; j++) {
      console.log("    " + document.getElementsByTagName("table")[7].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[(i*5)+1+j].innerText.trim());
    }
  }
  throw 'This is a test page';
}

var strTime = "0:00";
try {
  strTime = document.getElementsByName("timerVal")[0].value;
} catch(err) {}
var mins = parseInt(strTime.split(":")[0]);
var secs = parseInt(strTime.split(":")[1]);
var total = (mins * 60) + secs;
var total_plus_buffer = total == 0 ? 0 : total + 2;

console.log(mins + " : " + secs + " Time Left");
console.log(total + " Total Seconds");
console.log(total_plus_buffer + " Total Seconds With Buffer");

var myJavaScript = "setTimeout(function(){formSubmit()}, " + (total_plus_buffer * 1000) + ");";    //You need to put your JS here.
var scriptTag = document.createElement("script");
scriptTag.innerHTML = myJavaScript;
document.head.appendChild(scriptTag);
