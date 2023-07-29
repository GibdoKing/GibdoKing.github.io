const expold = false;
switch(expold) {
  case true:
    alert('The latest experimental build is older than the latest stable build. Using latest stable build ...');
    var runscript=document.createElement("script");runscript.src="https://gibdoking.github.io/main.js",document.head.appendChild(runscript),runscript.remove();
    break;
  case false:
    var runscript=document.createElement("script");runscript.src="https://gibdoking.github.io/exp.js",document.head.appendChild(runscript),runscript.remove();
}
