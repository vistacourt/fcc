
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
                    ["I like everything about religion except god.<br/>"+"<auth> - Thomas Kelly</auth>"],
                    ["The Druids... no one knows who they were or what they were doing.<br/>"+"<auth> - Nigel Tufnel</auth>"],
                    ["I like to picture Jesus in a tuxedo t-shirt, cause it says, like, I want to be formal but I want to party too. Cause I like to party, so I like my Jesus to party.<br/>"+"<auth> - Cal Naughton Jr.</auth>"],
                    ["Hey, wait a minute, there's no birthday party for me here!<br/>"+"<auth> - Jeff Spicoli</auth>"],
                    ["Who picks your clothes - Stevie Wonder?<br/>"+"<auth> - Don Rickles</auth>"],
                    ["Welcome to Costco, I love you.'<br/>"+"<auth> - Guy at Costco</auth>"],
                    ["Carl's Jr... Fuck you, I'm eating<br/>"+"<auth> - Carl's Jr. Computer</auth>"],
                    ["If I were running The View, I’d fire Rosie O’Donnell. I mean, I’d look at her right in that fat, ugly face of hers, I’d say Rosie, you’re fired.<br/>"+"<auth> - Donald Trump</auth>"],
                    ["I don't even listen to rap. My aprtment is too nice for it.<br/>"+"<auth> - Kanye West</auth>"],
                    ["My greatest pain in life is that I will never be able to see myself perform live.<br/>"+"<auth> - Kanye West</auth>"],
                    ["I have five of broats.<br/>"+"<auth> - Dr. Steve Brule</auth>"],
                    ["I basically love anything that comes in a hot dog bun… except hot dogs.<br/>"+"<auth> - Gwyneth Paltrow</auth>"],
                  ];
  var rqVar = items[Math.floor(Math.random()*items.length)];
  el.innerHTML = rqVar;
}
