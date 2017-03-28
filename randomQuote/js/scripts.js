
$(document).ready(function() {
  $("button").click(function(){
    $("#rqId").hide();
    $("#rqId").fadeIn();
  });
});

function tweetIt () {
  var phrase = document.getElementById('rqId').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase);
    window.open(tweetUrl, "_blank", "top=500,left=500,width=400,height=200");
}

function randomQuote(){
  var el = document.getElementById("rqId");
  var items = [["You know why, mister? 'Cause you drove a Hyundai to get here tonight, I drove an eighty thousand dollar BMW. That's my name.<br/>"+"<auth> - Blake</auth>"],
                    ["Yeah........I'm gonna need you to come in on Saturday.<br/>"+"<auth> - Bill Lumbergh</auth>"],
                    ["I can't believe you like money too. We should hang out.<br/>"+"<auth> - Frito</auth>"],
                    ["There's 106 miles to Chicago, we've got a full tank of gas, half a pack of cigarettes, it's dark out, and we're wearing sunglasses.<br/>"+"<auth> - Jake Elwood</auth>"],
                    ["So, good news, I saw a dog today.<br/>"+"<auth> - Buddy Elf</auth>"],
                    ["What’s so great about a mom and pop store? Let me tell you something, if my mom and pop ran a store I wouldn’t shop there..<br/>"+"<auth> - George Costanza</auth>"],
                    ["I immediately regret this decision.<br/>"+"<auth> - Ron Burgundy</auth>"],
                    ["If you're raking the leaves and it gets all over your driveway, just hose it off dummy.<br/>"+"<auth> - Dr. Steve Brule</auth>"],
                    ["Violence is my last option.<br/>"+"<auth> - Chuck Norris</auth>"],
                    ["How would you like one across yo lip?<br/>"+"<auth> - Fred Sanford</auth>"],
                    ["You have the ring. And I see that your Schwartz is as big as mine. Now, let's see how well you handle it.<br/>"+"<auth> - Dark Helmet</auth>"],
                  ];
  var rqVar = items[Math.floor(Math.random()*items.length)];
  el.innerHTML = rqVar;
}
