$(document).ready(function () {
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      console.log(y);
  
      if (y > 250) {
        $(".first").addClass("hide");
      } else {
        $(".first").removeClass("hide");
      }

      if (y > 500) {
        $(".first").addClass("appear");
      } else {
        $(".first").removeClass("appear");
      }



    });
  });
  