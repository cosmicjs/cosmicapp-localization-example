$(function() {
  var page = $('body').data('page');
  getContent(page, 'en-US');
  $('.set-locale').on('click', function() {
    var locale = $(this).data('locale');
    getContent(page, locale);
    $('.set-locale').removeClass('btn-primary');
    $('.set-locale').addClass('btn-default');
    $(this).removeClass('btn-default');
    $(this).addClass('btn-primary');
  });
});
function getContent(page, locale) {
  $('#page').html('Loading...');
  $.getJSON('https://api.cosmicjs.com/v1/localization-example/object/' + page + '?locale=' + locale, function(data) {
    var object = data.object;
    var page_markup = '<h1>' + object.title + '</h1>';
    page_markup += '<div>' + object.content + '</div>';
    $('#page').html(page_markup);
  })
}