function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, se) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  se.appendChild(document.getElementById(data));
}





