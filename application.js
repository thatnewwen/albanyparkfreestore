$( document ).ready(function() {
 var petals = $(".petal");

var degrees = 0
  var lastScrollTop = 0;
  $(document).scroll(function(event){
    var st = $(this).scrollTop();
    console.log(st)
    if (st > lastScrollTop){
      degrees += 0.25;
      // downscroll code
    } else {
      degrees -= 0.25;
      // upscroll code
    }
    petals[0].style.transform = "rotate(" + -st/40*3 + "deg)"; 
    petals[1].style.transform = "rotate(" + -st/40*2 + "deg)"; 
    petals[2].style.transform = "rotate(" + -st/40 + "deg)"; 
    petals[3].style.transform = "rotate(" + st/40*3 + "deg)"; 
    petals[4].style.transform = "rotate(" + st/40*2 + "deg)"; 
    petals[5].style.transform = "rotate(" + st/40 + "deg)"; 
    lastScrollTop = st;
  });
  var serviceNum = 0;
  
  $('.service').click(function(){
    serviceNum += 1;
    console.log(serviceNum)
    if (serviceNum > 2) {
      $(".block")[2].style.visibility = "visible";
    } else if (serviceNum > 1) {
      $(".block")[1].style.visibility = "visible";
    } else if (serviceNum > 0) {
      $(".block")[0].style.visibility = "visible";
    }
  })
});


