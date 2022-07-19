function hours() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var time = h + ':' + m;
  document.getElementById('time').innerHTML = time;
  setTimeout(hours, 60000);
}

hours();
