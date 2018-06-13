//without debugger
function intenseString(str) {
  var strArr = [];
  var stop = false;
  var intense = true;
  var startChk = str.length - 1;
  for (var i = startChk; i >= 0; i--) {
    if (str[startChk] !== '!') {
      intense = false;
      return intense;
    } else if (str[i] === '!') {
      strArr += str[i];
    } else {
      stop = i;
    }
  }
  if (intense && strArr.length >= 3) {
    for (var j = stop; j >= 0; j--) {
      if (str[j] === '!') {
        intense = false;
      } else {
        intense = true;
      }
    }
  } else {
    intense = false;
  }
  return intense;
}

// with debugger
function intenseString(str) {
  function chk(num) {
    console.log('cyse' + num)
  }
  var strArr = [];
  var stop = false;
  var intense = true;
  var startChk = str.length - 1;
  for (var i = startChk; i >= 0; i--) {
    if (str[startChk] !== '!') {
      intense = false;
      return intense;
    } else if (str[i] === '!') {
      strArr += str[i];
    } else {
      stop = i;
    }
    console.log('can you see me1')
  }
  console.log('can you see me')
  if (intense && strArr.length >= 3) {
    for (var j = stop; j >= 0; j--) {
      chk(3)
      if (str[j] === '!') {
        intense = false;
      } else {
        intense = true;
      }
    }
  } else {
    intense = false;
  }
  chk(4)
  return intense;
  chk(5)
}
