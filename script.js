$(document).ready(function() {
  $('.btn').click(function(e) {
    const name = e.currentTarget.id
    $('.' + name.substring(0, name.length - 4)).toggle();
    $('#' + e.currentTarget.id).toggleClass("disabled");
  });
});
