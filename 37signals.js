var weekDay=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


var d= new Date();

var today= weekDay[d.getDay()];

console.log(today);

$("#day").html("Happy "+ today);


$("#container>a").on("mouseenter", "#first", function() {
  $("#headline").hide();
  $("#headline1").show();
$("#arrow").show();
  //  $("#headline").html("<h1>Basecamp is the project management tool you wish you had on your last project </h1><h6>Are you still managing projects with email? Are you still using Excel for your to-do lists? It's time to upgrade to Basecamp</h6>");             
}
);

$("#container>a").on("mouseleave", "#first", function() {
  $("#headline1").hide();
  $("#headline").show();   
  $("#arrow").hide();
}
);



$("#container>a").on("mouseenter", "#second", function() {
  $("#headline").hide();
  $("#headline2").show();
$("#arrow2").show();
  //  $("#headline").html("<h1>Basecamp is the project management tool you wish you had on your last project </h1><h6>Are you still managing projects with email? Are you still using Excel for your to-do lists? It's time to upgrade to Basecamp</h6>");             
}
);

$("#container>a").on("mouseleave", "#second", function() {
  $("#headline2").hide();
  $("#headline").show();   
  $("#arrow2").hide();
}
);

$("#container>a").on("mouseenter", "#third", function() {
  $("#arrow3").show();
  $("#headline").html("<h1>Far or near, Campfire helps teams work together over the web in real time.</h1><h6>Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a realt-time private chat room. It's game changing. We couldn't run our own business without Campfire.</h6>");             
}
);

$("#container>a").on("mouseleave", "#third", function() {
  $("#arrow3").hide();
  $("#headline").html("<h1>Making collaboration productive and enjoyable for people everyday</h1><h3>Frustration free-web-based apps for collaboration, sharing information, and making decisions</h3>");             
}
);

// JavaScript Document
