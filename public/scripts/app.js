$(document).ready(function() {
  console.log('The document is ready!');

  $('.create-poll-button').on('click', (e) => {
    $('.create-poll-glass').slideDown();

    $('html,body').animate({ scrollTop: 550 }, 'slow');

  });

  //makes character counter a live count of text chars in textarea
  $('#add_option').on('click', function(e) {
    $('#option_list').append(`<div class="card">
    <input type="text" name="options">
  </div>`);
    $('#add_option').blur();
  });


  $('.link').text(`${document.URL}/vote`);
});
