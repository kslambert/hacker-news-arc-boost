/* This runs after a web page loads */
var getHeader = document.getElementsByTagName('head').item(0);
var linkStyle = document.createElement("link");
var url = "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=Press+Start+2P&display=swap";
linkStyle.href = url;
linkStyle.rel = 'stylesheet';
linkStyle.type = "text/css"; 
getHeader.appendChild(linkStyle);
