$(function () {
  // bottom fixed nav
  // 顯示
  $(".bottom-fixed").hide(); // 20230210 新增
  $(window).on("scroll", function (e) {
    e.preventDefault();
    if ($(window).scrollTop() >= 50 && $(window).width() < 767) {
      $(".bottom-fixed").fadeIn(300);
    } else {
      $(".bottom-fixed").fadeOut(300);
    }
  });

  // go top
  // 向上捲動
  $(".go-top").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  // right nav
  // go top
  // 向上捲動
  $(".go-top2").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  // go reserve
  // 向上捲動
  $(".go-reserve").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".container2").offset().top }, 1000);
  });

  // go reserve
  // 向上捲動
  $(".go-reserve2").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".container2").offset().top }, 1000);
  });

  // 20230201更新 star
  // go check-in
  // 向上捲動
  $(".go-check").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".container4").offset().top }, 1000);
  });
  // 20230201更新 end

  // fade in
  $(window).on("scroll", function (e) {
    e.preventDefault();
    if ($(window).scrollTop() >= 50) {
      $(".fadeIn").fadeIn(300);
    } else {
      $(".fadeIn").fadeOut(300);
    }
  });

  // fixed-anchor
  // 顯示
  $(window).on("scroll", function (e) {
    e.preventDefault();
    if ($(window).scrollTop() >= 50 && $(window).width() < 767) {
      $(".nav-fixed").fadeIn(300);
    } else {
      $(".nav-fixed").fadeOut(300);
    }
  });

  // ham icon 漢堡選單
  $(".ham-icon").click(function (e) {
    e.preventDefault();
    $(".dropdown").toggleClass("active");
  });

  $(".dropdown li a").click(function (e) {
    $(".dropdown").toggleClass("active");
  });

  $("body").click(function (e) {
    var container = $(".dropdown");
    var btn = $(".ham-icon");
    // 判斷點擊的地方不是DIV或按鈕
    if (
      !container.is(e.target) &&
      !container.has(e.target).length &&
      !btn.is(e.target) &&
      !btn.has(e.target).length
    ) {
      container.removeClass("active");
      $(".ham-icon").removeClass("active");
    }
  });
});

// 導航列
// 下拉隱藏 上拉顯示
$(function () {
  var page_heig =
    $(document).scrollTop(); /* 初始化。用於第一次獲取滾動條的高度 */
  var navigation = $(".header").outerHeight(); /* 獲取該元素的高度 */

  $(window).scroll(function () {
    /* 滾動條觸發事件 */
    var real_heig = $(document).scrollTop(); /* 事件觸發後獲取滾動條高度 */

    if (real_heig > navigation) {
      /* 觸發後的高度 與 元素的高度對比 */
      $(".header").css("display", "none"); /* True display : none 隱藏 */
    } else {
      $(".header").css("display", "block"); /* False display : block 顯示  */
    }

    if (real_heig < page_heig) {
      /* 觸發後的高度 與 上次觸發後的高度 */
      $(".header").css("display", "block"); /* True display : block 顯示 */
    }
    page_heig =
      $(
        document
      ).scrollTop(); /* 再次獲取滾動條的高度，用於下次觸發事件後的對比 */
  });
});
