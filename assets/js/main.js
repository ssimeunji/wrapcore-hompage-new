(function ($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    wide: ["1281px", "1680px"],
    normal: ["981px", "1280px"],
    narrow: ["841px", "980px"],
    narrower: ["737px", "840px"],
    mobile: ["481px", "736px"],
    mobilep: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });


  // fetch('/header.html')
  //       .then(response => response.text())
  //       .then(html => {
  //         document.getElementById('header').innerHTML = html;
  //       });
  fetch('../footer.html')
        .then(response => response.text())
        .then(html => {
          document.getElementById('footer').innerHTML = html;
        });

  // 헤더 높이를 동적으로 계산하여 나머지 콘텐츠의 상단 여백을 조정
  function adjustContentMargin() {
    var headerHeight = $("#header").outerHeight();
    $(".sections").css("margin-top", headerHeight + "px");
  }

  // 페이지 로드 시에도 한 번 호출
  adjustContentMargin();

  // 윈도우 크기 변경 시에도 호출
  $(window).resize(function () {
    adjustContentMargin();
  });
  
  
  

  // Dropdowns.
  $("#nav > ul").dropotron({
    offsetY: -15,
    hoverDelay: 0,
    alignment: "center"
  });

  // Nav.
  // Bar.
  $(
    '<div id="titleBar">' +
      '<a href="#navPanel" class="toggle"></a>' +
      '<span class="title">' +
      $("#logo").html() +
      "</span>" +
      "</div>"
  ).appendTo($body);

  // Panel.
  $('<div id="navPanel">' + "<nav>" + $("#nav").navList() + "</nav>" + "</div>")
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "left",
      target: $body,
      visibleClass: "navPanel-visible",
    });
  
  // floating :: 스크롤 맨 위로 올리기
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');

  scrollToTopBtn.addEventListener('click', function() {
      scrollToTop(1000); // 애니메이션 지속 시간 (밀리초)
  });

  function scrollToTop(duration) {
      const startingY = window.pageYOffset;
      const targetY = 0;
      const startTime = performance.now();

      function easeInOutQuad(time, start, change, duration) {
          time /= duration / 2;
          if (time < 1) return change / 2 * time * time + start;
          time--;
          return -change / 2 * (time * (time - 2) - 1) + start;
      }

      function animation() {
          const timeElapsed = performance.now() - startTime;
          window.scrollTo(0, easeInOutQuad(timeElapsed, startingY, targetY - startingY, duration));

          if (timeElapsed < duration) {
              requestAnimationFrame(animation);
          }
      }
      requestAnimationFrame(animation);
  }
})(jQuery);
