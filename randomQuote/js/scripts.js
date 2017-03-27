
$(document).ready(function() {
  $("button").click(function(){
    $("#rqId").hide();
    $("#rqId").fadeIn();
  });
});


var link = document.createElement('a');
link.setAttribute('href', 'https://twitter.com/share');
link.setAttribute('class', 'twitter-share-button');
link.setAttribute('style', 'margin-top:5px;');
link.setAttribute("data-text" , "I just achieved a score of " + "rqId" + " on #2048Lagos a game where you find transport methods in lagos and score high." );
link.setAttribute("data-via" ,"denvycom") ;
link.setAttribute("data-size" ,"large") ;
// this.lowermessageContainer.appendChild(link) ;
twttr.widgets.load();  //very important


function randomQuote(){


  var el = document.getElementById("rqId");

  var items = [["You know why, mister? 'Cause you drove a Hyundai to get here tonight, I drove an eighty thousand dollar BMW. That's my name.<br/><br/>"+"<auth> - Blake</auth>"],
                    ["Yeah........I'm gonna need you to come in on Saturday.<br/><br/>"+"<auth> - Bill Lumbergh</auth>"],
                    ["I can't believe you like money too. We should hang out.<br/><br/>"+"<auth> - Frito</auth>"],
                    ["There's 106 miles to Chicago, we've got a full tank of gas, half a pack of cigarettes, it's dark out, and we're wearing sunglasses.<br/><br/>"+"<auth> - Jake Elwood</auth>"],
                    ["So, good news, I saw a dog today.<br/><br/>"+"<auth> - Buddy Elf</auth>"],
                    ["What’s so great about a mom and pop store? Let me tell you something, if my mom and pop ran a store I wouldn’t shop there..<br/><br/>"+"<auth> - George Costanza</auth>"],
                    ["I immediately regret this decision.<br/><br/>"+"<auth> - Ron Burgundy</auth>"],
                    ["If you're raking the leaves and it gets all over your driveway, just hose it off dummy.<br/><br/>"+"<auth> - Dr. Steve Brule</auth>"],
                    ["Violence is my last option.<br/><br/>"+"<auth> - Chuck Norris</auth>"],
                    ["How would you like one across yo lip?<br/><br/>"+"<auth> - Fred Sanford</auth>"],
                    ["You have the ring. And I see that your Schwartz is as big as mine. Now, let's see how well you handle it.<br/><br/>"+"<auth> - Dark Helmet</auth>"],
                  ];
  var rqVar = items[Math.floor(Math.random()*items.length)];

  el.innerHTML = rqVar;
$("#cool").fadeIn();

}
