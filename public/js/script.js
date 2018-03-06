

function toggleShow() {

  if (document.getElementById('gridRadios1').checked) {
    document.getElementById('reason').style.display = 'none';
    document.getElementById('date').style.display = 'block';
  } else {

    document.getElementById('reason').style.display = 'block';
    document.getElementById('date').style.display = 'none';
  }
}







  $('.sendButton').attr('disabled',true);
  $('#ausID').keyup(function(){
      if($(this).val().length !=0)
          $('.sendButton').attr('disabled', false);            
      else
          $('.sendButton').attr('disabled',true);
  })
