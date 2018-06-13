function intenseString(str) {
  //setting up the variables
  var checkIntense = '';
  var strLength = str.length;
  var stopLoop = strLength - 3;
  var intense = false
  //pull last 3 char
  for (var i = stopLoop; i < strLength; i++) {
    checkIntense += str[i];
  }
  console.log(checkIntense);
  //check last 3 for !!!
  if (checkIntense === "!!!") {
    intense = true;
  } else {
    intense = false;
  }
  console.log(intense);
  //continue checking string for intense
  if (intense === true) {
    //check the rest of the word for !!!
    for (var i = stopLoop; i >= 0; i--) {
      //if str is all ! intense is true
      if (str[i] === '!') {
        console.log(str[i]);
        intense = true;
      } else if (str[i] !== '!') { //if char isn't ! track it
        console.log(str[i]);
        var j = i
        console.log('last loop');
        //make sure there are no other !
        for (var i = j; i >= 0; i--) {
          if (str[i] !== '!') {
            console.log(str[i]);
            intense = true;
          } else {
            intense = false;
          }
        }
      }
    }
  }
  return intense
}
