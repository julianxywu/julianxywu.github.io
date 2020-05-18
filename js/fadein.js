$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + ($(window).height() * .6)
  var tags = $(".scrollMessage")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("invisible")
    } else {
      $(tag).removeClass("invisible")
    }
  }
})
