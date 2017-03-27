
$(document).ready(function() {
  $("button").click(function(){
      $("#cool").fadeIn();
      // $("#rqId").fadeIn("slow");
      // $("#rqId").fadeIn(3000);
  });
});

function randomQuote(){


  var el = document.getElementById("rqId");

  var items = [["You know why, mister? 'Cause you drove a Hyundai to get here tonight, I drove an eighty thousand dollar BMW. That's my name.<br/><br/>"+"<auth> - Blake</auth>"],
                    ["Yeah........I'm gonna need you to come in on Saturday.<br/><br/>"+"<auth> - Bill Lumbergh</auth>"],
                    ["I can't believe you like money too. We should hang out.<br/><br/>"+"<auth> - Frito</auth>"],
                    ["There's 106 miles to Chicago, we've got a full tank of gas, half a pack of cigarettes, it's dark out, and we're wearing sunglasses.<br/><br/>"+"<auth> - Jake Elwood</auth>"],
                    ["So, good news—I saw a dog today.<br/><br/>"+"<auth> - Buddy Elf</auth>"],
                    ["What’s so great about a mom and pop store? Let me tell you something, if my mom and pop ran a store I wouldn’t shop there..<br/><br/>"+"<auth> - George Costanza</auth>"],
                  ];
  var rqVar = items[Math.floor(Math.random()*items.length)];

  el.innerHTML = rqVar;
$("#cool").fadeIn();

}
