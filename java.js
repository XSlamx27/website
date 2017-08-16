
jQuery(document).ready(function()
{

$('#projet').hide();

$('#toggler').on('click', function()  {
$('#projet').toggle(400);
return false;
  });
});
