$(document).ready(function () {
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      console.log(y);
  
      if (y > 0) {
        $(".first").addClass("hide");
      } else {
        $(".first").removeClass("show");
      }

      if (y > 500) {
        $(".first").addClass("appear");
      } else {
        $(".first").removeClass("appear");
      }



    });
  });
  