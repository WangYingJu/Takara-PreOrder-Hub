$(function () {
  $(".v-tab_content").hide();
  $(".v-tab_content:first").show();
  $(".area__item.active").find(".black-mask").hide();
  // $(".black-mask").show();
  // $(".black-mask:first").hide();
  // $(".black-mask:nth-child(6)").hide();

  $(".area__item").click(function () {
    $(".v-tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn(1000);
    $(".area__item").removeClass("active");
    $(this).addClass("active");
  });

  $(".area__item").click(function () {
    $(this).find(".black-mask").css("display", "none");
    $(this).siblings().find(".black-mask").css("display", "block");
  });
});
