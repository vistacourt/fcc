
function randomQuote(){
  var items = Array("You know why, mister? 'Cause you drove a Hyundai to get here tonight; I drove an eighty thousand dollar BMW. That's my name.",
                    "Yeah........I'm gonna need you to come in on Saturday.",
                    "I can't believe you like money too. We should hang out.",
                    "There's 106 miles to Chicago, we've got a full tank of gas, half a pack of cigarettes, it's dark out, and we're wearing sunglasses.",
                    "So, good news—I saw a dog today.");
  var rqVar = items[Math.floor(Math.random()*items.length)];
  document.getElementById('rqId').innerHTML = rqVar;
}
