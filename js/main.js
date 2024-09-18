$(function () {
  var contentsCount = $(".contents_wrap").length;
  var n = 1;

  if (contentsCount <= n) {
    $(".contents_btn").hide();
  } else {
    $(".contents_wrap").slice(n).hide();

    $(".contents_btn").click(function () {
      if ($(".contents_wrap").slice(n).is(":hidden")) {
        $(".contents_wrap").slice(n).slideDown();
        $(this).text("閉じる");
      } else {
        $(".contents_wrap").slice(n).slideUp();
        $(this).text("もっと見る");
      }
    });
  }
});

$(function () {
  var contentsCount = $(".contents_wrap2").length;
  var n = 0;

  if (contentsCount <= n) {
    $(".contents_btn2").hide();
  } else {
    $(".contents_wrap2").slice(n).hide();

    $(".contents_btn2").click(function () {
      if ($(".contents_wrap2").slice(n).is(":hidden")) {
        $(".contents_wrap2").slice(n).slideDown();
        $(this).text("閉じる");
      } else {
        $(".contents_wrap2").slice(n).slideUp();
        $(this).text("もっと見る");
      }
    });
  }
});
