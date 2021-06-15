$(document).ready(function () {
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      console.log(y);
  
      if (y > 1250) {
        $(".first").addClass("hide");
      } else {
        $(".first").removeClass("hide");
      }

      if (y > 5600) {
        $(".first").addClass("appear");
      } else {
        $(".first").removeClass("appear");
      }



    });
  });
  