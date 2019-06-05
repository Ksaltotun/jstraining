/*
function ifSpam(str){
  str = str.toLowerCase();
  if( str.indexOf('viagra') > 0 || str.indexOf('xxx') > 0){
    return true;
  } else { 
    return false
  }
}

x = ifSpam('free xxxxx');
alert(x); */

function truncate(str, maxlength) {
  var strBuf;
  strBuf = str.slice(0, maxlength-3);
  strBuf += "...";
  return strBuf; 
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));