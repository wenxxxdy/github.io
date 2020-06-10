  // navメニュー
  // cssのtransitionと秒数合わせる
  $('#nav_toggle').click(function () {
    $("header").toggleClass('open');
    $("nav").slideToggle(300);
  });

  // LuminousGallery
  var luminousTrigger = document.querySelectorAll('.luminous');
  var options         = {
    caption: function (trigger) {
      return trigger.querySelector('img').getAttribute('alt');
    },
  }
  if (luminousTrigger !== null) {
    new LuminousGallery(luminousTrigger, {}, options);
  }


  // アコーディオン
  $('.aco_list_q').click(function () {
    $(this).toggleClass('open');
    $(this).next('.aco_list_a').slideToggle(100);
  });

  // TOPへ戻るbtn
  // $(function () {
  //  $("#top_btn").hide();
  //  $(window).on("scroll", function () {
  //  if ($(this).scrollTop() > 200) {
  //  $(".top_btn").fadeIn();
  //  } else {
  //  $(".top_btn").fadeOut();
  //  }
  //  });
  // });
  $(function () {
    $("#top_btn").hide();
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 200) {
        $(".top_btn").fadeIn();
      } else {
        $(".top_btn").fadeOut();
      }
      scrollHeight   = $(document).height();
      scrollPosition = $(window).height() + $(window).scrollTop();
      footHeight     = $("footer").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
        $(".top_btn").css({
          "position": "absolute",
        });
      } else {
        $(".top_btn").css({
          "position": "fixed",
        });
      }
    });
  });