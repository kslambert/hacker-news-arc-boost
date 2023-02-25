var header = document.getElementsByTagName('head').item(0);

// set the padding for the top bar
document.getElementById("hnmain").firstElementChild.firstElementChild.firstElementChild.setAttribute("style", "padding:16px");

//get font
var linkStyle = document.createElement("link");
var url = "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=Press+Start+2P&display=swap";
linkStyle.href = url;
linkStyle.rel = 'stylesheet';
linkStyle.type = "text/css";
header.appendChild(linkStyle);