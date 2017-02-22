// TODO: This needs work. each time you click this form submit the current lesson information is passed it. It needs to be parsed.
var modulePattern = "displayModuleContentTOC";
var moduleScript = `
setTimeout(document.getElementsByTagName("a")[document.getElementsByTagName("a").length - 1].click(), 1000);
`;

var lessonPattern = "outputContentHtml";
var lessonScript = `
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

setTimeout(function(){formSubmit()}, total_plus_buffer * 1000);
`;

var testPagePattern = "displayTestSequenceQuestions";
var testPageScript = `
for (var i=0; i<10; i++) {
  var q = document.getElementsByTagName("table")[7].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[(i*5)+1].innerText.replace(/^\s*\d*\s*/,"").trim();
  console.log(q);
  for(var j=1; j<=4; j++) {
    var a = document.getElementsByTagName("table")[7].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[(i*5)+1+j].innerText.trim();
    console.log("    " + a);
    if (a === "") { //TODO: Put in some logic to reach out to my server
      document.getElementsByTagName("table")[7].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[(i*5)+1+j].getElementsByTagName("td")[0].getElementsByTagName("input")[0].checked = true;
    }
  }
}
`;

var reviewPagePattern = "displayReviewContentDetails";
var reviewPageScript = `
setTimeout(function(){formSubmit()}, 1000);
`

var script = "";

if(document.URL.includes(testPagePattern)) {
  console.log("*** This is a test page")
  script = testPageScript;
} else if (document.URL.includes(lessonPattern)) {
  console.log("*** This is a lesson page")
  script = lessonScript;
} else if (document.URL.includes(modulePattern)) {
  console.log("*** This is a module page");
  script = moduleScript;
} else if (document.URL.includes(reviewPagePattern)) {
  console.log("*** This is a review page");
  script = reviewPageScript;
} else {
  console.log("*** Can't help you");
  alert("Can't help you, sorry!")
}

var myJavaScript = script;
var scriptTag = document.createElement("script");
scriptTag.innerHTML = myJavaScript;
document.head.appendChild(scriptTag);
