
jQuery(document).ready(function()
{

$('#projet').hide();

$('#toggler').on('click', function()  {
$('#projet').show();
  });
$('#projet').toggle(400);
return false;
  });
});
