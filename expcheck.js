const expold = false;
if (expold === true) {
  alert('The latest experimental build is older than the latest stable build. Using latest stable build ...');
  var runscript=document.createElement("script");runscript.src="https://gibdoking.github.io/main.js",document.head.appendChild(runscript),runscript.remove();
}

else {
  var runscript=document.createElement("script");runscript.src="https://gibdoking.github.io/exp.js",document.head.appendChild(runscript),runscript.remove();
}
