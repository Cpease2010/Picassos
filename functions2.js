// function intenseString(str) {
//   var strArr = [];
//   var stop = null;
//   var intense = undefined;
//   for (let i = (str.length - 1); i >= 0; i--) {
//     if (str[i] === '!') {
//       strArr += str[i];
//     } else {
//       stop = i;
//     }
//   }
//   if (stop && strArr.length >= 3) {
//     for (var j = stop; j >= 0; j--) {
//       if (str[j] === '!') {
//         intense = false;
//         return intense;
//       } else {
//         intense = true;
//       }
//     }
//   } 
//   return intense;
// }

// function intenseString (str) {
//   //setting up the variables
//   console.log('yellow')
//   var checkIntense = '';
//   var strLength = str.length;
//   var stopLoop = strLength - 3;
//   var intense = false;
//   var stopIntense = 0;
//   //pull last 3 char
//   for (var i = stopLoop; i < strLength; i++) {
//     checkIntense += str[i];
//   }
//   console.log(checkIntense);
//   //check last 3 for !!!
//   if (checkIntense === "!!!") {
//     intense = true;
//     return intense;
//   } else {
//     intense = false;
//     return intense
//   }
//   console.log(intense)
// }


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
