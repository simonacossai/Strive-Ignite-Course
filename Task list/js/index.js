let Nodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < Nodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "delete";
  span.appendChild(txt);
  Nodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("delete");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}, false);

function addTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You have to write something before");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("input").value = "";
   
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "delete";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function removeEverything(){
    document.querySelector("#myList").innerHTML =""
}

function changeList() {
    let checkbox = document.querySelector("#completedonly").checked
    if (checkbox) {
        let completed = document.querySelectorAll(".done")
        for(let i = 0; i < completed.length; i ++)
            completed[i].classList.add("hidden")
    }
    else{
        let hidden = document.querySelectorAll(".hidden")
        for(let i = 0; i < hidden.length; i ++)
            hidden[i].classList.remove("hidden")
    }
}
