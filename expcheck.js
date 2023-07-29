const expold = false;
switch(expold) {
  case true: // redirects to use latest stable build if exp build is older
    alert('The latest experimental build is older than the latest stable build. Using latest stable build ...');
    var runscript=document.createElement("script");runscript.src="https://gibdoking.github.io/stable.js",document.head.appendChild(runscript),runscript.remove();
    break;
  case false: // uses latest exp build
    var runscript=document.createElement("script");runscript.src="https://gibdoking.github.io/exp.js",document.head.appendChild(runscript),runscript.remove();
}
